import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { AlbumsModule } from './albums/albums.module';
import { ConfigModule } from './config/config.module';
import { FileUploadService } from './common/services/file-upload/file-upload.service';

@Module({
  imports: [AuthModule, UsersModule, PhotosModule, AlbumsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, FileUploadService],
})
export class AppModule {}
