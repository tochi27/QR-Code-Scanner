import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class RootController {
  @Get()
  redirectToQr(@Res() res: Response) {
    return res.redirect('/qr');
  }
}
