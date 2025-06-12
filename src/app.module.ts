import { Module } from "@nestjs/common";
import { QrCodeModule } from "./qrcode/qrcode.module";
import { MoviesModule } from "./movies/movies.module";

@Module({
  imports: [QrCodeModule, MoviesModule],
})
export class AppModule {}
