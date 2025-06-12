import { Module } from "@nestjs/common";
import { QrCodeModule } from "./qrcode/qrcode.module";
import { MoviesModule } from "./movies/movies.module";
import { RootModule } from "./root/root.module";

@Module({
  imports: [QrCodeModule, MoviesModule, RootModule],
})
export class AppModule {}
