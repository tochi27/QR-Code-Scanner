import { forwardRef, Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { QrCodeModule } from '../qrcode/qrcode.module';

@Module({
  imports: [forwardRef(() => QrCodeModule)],
  providers: [MoviesService],
  controllers: [MoviesController],
  exports: [MoviesService],
})
export class MoviesModule {}
