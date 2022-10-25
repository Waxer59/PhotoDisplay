import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/images/entities/image.entity';
import { Repository } from 'typeorm';
import { seedData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>
  ) {}

  async runSeed() {
    await this.deleteTables;

    await this.insertImages();

    return 'Seed executed!';
  }

  private async deleteTables() {
    const queryBuilder = this.imageRepository.createQueryBuilder();

    await queryBuilder.delete().where({}).execute();
  }

  private async insertImages() {
    const seedImages = seedData.images;

    const images: Image[] = [];

    seedImages.forEach((image) => {
      images.push(this.imageRepository.create(image));
    });

    await this.imageRepository.save(images);
  }
}
