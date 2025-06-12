import { Injectable } from "@nestjs/common";
import movieData from "../data/movies.json";

@Injectable()
export class MoviesService {
  getRandomMovies(count = 10) {
    const shuffled = [...movieData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
