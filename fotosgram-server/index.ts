import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// APP Routes
server.app.use('/user', userRoutes);

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
