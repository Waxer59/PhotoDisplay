import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from './images/images.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ImagesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod', // Establecer una conexion certificada
      extra: {
        ssl: process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // Cargar automaticamente las entidades
      synchronize: true // sincronizar cualquier cambio
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
