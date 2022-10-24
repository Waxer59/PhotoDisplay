import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { ApiProperty, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('images')
@ApiTags('Images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @ApiProperty()
  @ApiResponse({
    status: 201,
    description: 'The image has been successfully created.'
  })
  @Post()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'All images have been sent.'
  })
  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'The image has been successfully deleted.'
  })
  @ApiResponse({
    status: 400,
    description: 'The image id is not valid.'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
