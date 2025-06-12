import { Controller, Get, Render, Res } from "@nestjs/common";
import { QrCodeService } from "./qrcode.service";
import { Response } from 'express';


@Controller('qr')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  // Route for full page render
  @Get('/')
  renderQrPage(@Res() res: Response) {
    res.render('qrcode'); // Uses EJS above
  }

  // Route for image refresh
  @Get('image')
  async serveQrImage(@Res() res: Response) {
    const { qrDataUrl } = await this.qrCodeService.generateNewCode();

    // Extract base64
    const base64 = qrDataUrl.split(',')[1];
    const imgBuffer = Buffer.from(base64, 'base64');

    res.setHeader('Content-Type', 'image/png');
    res.send(imgBuffer);
  }
}
