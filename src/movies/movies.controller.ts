import { Controller, Get, Param, Render } from '@nestjs/common';
import { QrCodeService } from '../qrcode/qrcode.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Get(':id')
  @Render('movies')
  getMovies(@Param('id') id: string) {
    const movies = this.qrCodeService.getMoviesById(id);
    return { movies };
  }
}