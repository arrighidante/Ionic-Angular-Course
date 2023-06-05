import { FileUpload } from '../interfaces/file.upload';
import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';

export default class FileSystem {
  constructor() {}

  saveTempImage(file: FileUpload, userId: string) {
    return new Promise((resolve, reject) => {
      // Create folder
      const path = this.createUserFolder(userId);

      // Define file name
      const fileName = this.createFileName(file.name);

      // Move file from Temp to destination folder
      file.mv(`${path}/${fileName}`, (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve('ok');
        }
      });
    });
  }

  moveFromTempToPost(userId: string) {
    const pathTemp = path.resolve(__dirname, '../uploads', userId, 'temp');
    const pathPost = path.resolve(__dirname, '../uploads', userId, 'posts');

    if (!fs.existsSync(pathTemp)) {
      return [];
    }

    if (!fs.existsSync(pathPost)) {
      fs.mkdirSync(pathPost);
    }

    const imagesTemp = this.getImagesFromTemp(userId);

    imagesTemp.forEach((img) => {
      //RenameSync will 'move' from pathTemp and 'paste' in pathPost
      fs.renameSync(`${pathTemp}/${img}`, `${pathPost}/${img}`);
    });

    return imagesTemp;
  }

  getImageUrl(userId: string, img: string) {
    // Create Path Posts
    const pathImage = path.resolve(
      __dirname,
      '../uploads',
      userId,
      'posts',
      img
    );

    //Verify if img exists
    const exists = fs.existsSync(pathImage);
    if (!exists) {
      return path.resolve(__dirname, '../assets/400x250.jpg');
    }
    return pathImage;
  }

  private getImagesFromTemp(userId: string) {
    // Get reference to pathTemp
    const pathTemp = path.resolve(__dirname, '../uploads', userId, 'temp');

    // Read directory in that path will return all the files/images within that path
    return fs.readdirSync(pathTemp) || [];
  }

  private createFileName(originalName: string) {
    const nameArr = originalName.split('.');
    const extension = nameArr[nameArr.length - 1];

    const idUniq = uniqid();

    return `${idUniq}.${extension}`;
  }

  private createUserFolder(userId: string) {
    const pathUser = path.resolve(__dirname, '../uploads', userId);
    const pathTemp = pathUser + '/temp';

    const exists = fs.existsSync(pathUser);
    if (!exists) {
      fs.mkdirSync(pathUser);
      fs.mkdirSync(pathTemp);
    }

    return pathTemp;
  }
}
