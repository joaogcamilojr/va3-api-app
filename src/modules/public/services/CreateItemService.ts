import { injectable, inject } from 'tsyringe';
import uploadConfig from '@config/upload';

import Item from '../infra/typeorm/schemas/Item';
import IItemsRepository from '../repositories/IItemsRepository';
import IStorageService from '@global/container/StorageService/models/IStorageService';

interface IRequest {
  title: string
  value: number
  image_url: string
};

@injectable()
class CreateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
    @inject('StorageService')
    private storageService: IStorageService
  ) {};

  public async execute(data: IRequest): Promise<Item> {
    const filename = await this.storageService.saveFile(data.image_url);

    const item = await this.itemsRepository.create({ ...data, image_url: filename });

    return item;
  }
};

export default CreateItemService;
