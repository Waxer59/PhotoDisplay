import { IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({
    description: 'url of the image',
    type: String,
    example:
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    required: true
  })
  @IsString()
  @IsUrl()
  url: string;

  @ApiProperty({
    description: 'The label of the image',
    type: String,
    example: 'Cat',
    minLength: 3,
    maxLength: 20,
    required: true
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  label: string;
}
