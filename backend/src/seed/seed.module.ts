import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ImagesModule } from '../images/images.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ImagesModule]
})
export class SeedModule {}
