import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("ejs");

  app.useStaticAssets(join(__dirname, "..", "src", "public"));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
