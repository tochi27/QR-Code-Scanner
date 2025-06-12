import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { MoviesService } from "../movies/movies.service";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class QrCodeService {
  private cache = new Map<string, any>();

  constructor(private readonly movieService: MoviesService) {}

  async generateNewCode(): Promise<{ id: string; qrDataUrl: string }> {
    const id = uuidv4();
    const movies = this.movieService.getRandomMovies();
    this.cache.set(id, movies);
    setTimeout(() => this.cache.delete(id), 600000); // expire in 10 minutes

    const baseUrl = process.env.BASE_URL || "http://192.168.128.48:3000";
    const url = `${baseUrl}/movies/${id}`;

    const qrDataUrl = await QRCode.toDataURL(url);
    return { id, qrDataUrl };
  }

  getMoviesById(id: string) {
    return this.cache.get(id);
  }
}
