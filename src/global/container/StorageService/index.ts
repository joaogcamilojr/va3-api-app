import { container } from 'tsyringe';
import IStorageService from './models/IStorageService';
import LocalStorageService from './implementations/LocalStorageService';

container.registerSingleton<IStorageService>('StorageService', LocalStorageService);
