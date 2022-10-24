import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imagesRepository: Repository<Image>
  ) {}

  async create({ url, label }: CreateImageDto) {
    try {
      const image = this.imagesRepository.create({
        url,
        label,
        date: new Date().getTime()
      });

      await this.imagesRepository.save(image);
      return {
        ...image
      };
    } catch (err) {
      this.handleDBErrors(err);
    }
  }

  async findAll() {
    const images = await this.imagesRepository.find({});

    return {
      images
    };
  }

  private async findOne(id: string) {
    let image: Image;

    if (isUUID(id)) {
      image = await this.imagesRepository.findOneBy({ id });
    }

    if (!image) {
      throw new NotFoundException(`Image with id: ${id} not found`);
    }

    return image;
  }

  async remove(id: string) {
    const image = await this.findOne(id);

    await this.imagesRepository.remove(image);

    return {
      image
    };
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    console.log(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
