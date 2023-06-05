import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import postRoutes from './routes/post';

const server = new Server();

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// FileUpload
server.app.use(fileUpload());

// APP Routes
server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes);

// Connect DB
mongoose
  .connect('mongodb://localhost:27017/fotosgram')
  .then(() => {
    console.log('## DB is Online!! ');
  })
  .catch((err) => {
    if (err) throw err;
  });

//Start express
server.start(() => {
  console.log('Server started at port', server.port);
});
