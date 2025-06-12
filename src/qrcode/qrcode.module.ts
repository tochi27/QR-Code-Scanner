import { forwardRef, Module } from "@nestjs/common";
import { QrCodeService } from "./qrcode.service";
import { QrCodeController } from "./qrcode.controller";
import { MoviesModule } from "../movies/movies.module";

@Module({
  imports: [forwardRef(() => MoviesModule)],
  providers: [QrCodeService],
  controllers: [QrCodeController],
  exports: [QrCodeService],
})
export class QrCodeModule {}
