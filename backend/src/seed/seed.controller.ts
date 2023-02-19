import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@Controller('seed')
@ApiTags('Seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @ApiProperty()
  executeSeed() {
    return this.seedService.runSeed();
  }
}
