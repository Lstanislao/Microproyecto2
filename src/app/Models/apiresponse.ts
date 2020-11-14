import { Personaje } from './personaje';

export interface APIResponse {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Array<Personaje>
}
