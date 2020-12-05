import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'images');

interface IUploadConfig {
  driver: 'local';
  tmpFolder: string;
  uploadsFolder: string;
  multer: {
    storage: StorageEngine;
  }
  config: {
    disk: {};
  };
};

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  // uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  uploadsFolder: path.resolve(tmpFolder),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
  },
} as IUploadConfig;
