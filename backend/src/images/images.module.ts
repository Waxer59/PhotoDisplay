import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [ConfigModule, TypeOrmModule.forFeature([Image])]
})
export class ImagesModule {}
