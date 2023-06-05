import { Router, Response, Request } from 'express';
import { validateToken } from '../middlewares/authentication';
import { Post } from '../models/post.model';
import { FileUpload } from '../interfaces/file.upload';
import FileSystem from '../classes/file-system';

const postRoutes = Router();
const fileSystem = new FileSystem();

// Get Fotogram Posts
postRoutes.get('/', async (req: any, res: Response) => {
  let page = Number(req.query.page) || 1;
  let skip = page - 1;
  skip = skip * 10;

  const posts = await Post.find()
    // Descendent order
    .sort({ _id: -1 })
    // Use pagination
    .skip(skip)
    // Get only 10
    .limit(10)
    // For the property user, get the user object
    .populate('user', '-password')
    .exec();

  res.json({
    ok: true,
    page,
    posts,
  });
});

// Create Fotogram Post
postRoutes.post('/', [validateToken], (req: any, res: Response) => {
  const body = req.body;
  body.user = req.user._id;

  const images = fileSystem.moveFromTempToPost(req.user._id);
  body.imgs = images;

  Post.create(body)
    .then(async (postDB) => {
      // For the property user, get the user object
      await postDB.populate('user', '-password').then(() => {
        res.json({
          ok: true,
          post: postDB,
        });
      });
    })
    .catch((err) => {
      res.json;
    });
});

// Upload File
postRoutes.post('/upload', [validateToken], async (req: any, res: Response) => {
  if (!req.files) {
    return res.status(400).json({
      ok: false,
      message: 'No files uploaded',
    });
  }

  const file: FileUpload = req.files.image;

  if (!file) {
    return res.status(400).json({
      ok: false,
      message: 'No image uploaded',
    });
  }
  if (!file.mimetype.includes('image')) {
    return res.status(400).json({
      ok: false,
      message: 'File is not an image',
    });
  }

  await fileSystem.saveTempImage(file, req.user._id);

  return res.json({
    ok: true,
    message: 'File uploaded successfully',
    file: file.mimetype,
  });
});

postRoutes.get('/image/:userid/:img', (req: any, res: Response) => {
  const userId = req.params.userid;
  const image = req.params.img;

  const pathImg = fileSystem.getImageUrl(userId, image);

  res.sendFile(pathImg);
});

export default postRoutes;
