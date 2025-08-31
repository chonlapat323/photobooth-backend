import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [AuthModule, UsersModule, PhotosModule, AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
