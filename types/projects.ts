import { MOVIE_CATEGORIES, MOVIE_GENRES, MOVIE_TAGS, PROJECT_STATUS } from '@/constants';

export type MovieCategory = (typeof MOVIE_CATEGORIES)[number]['value'];
export type MovieGenre = (typeof MOVIE_GENRES)[number]['value'];
export type ProjectStatus = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];
export type MovieTag = (typeof MOVIE_TAGS)[number]['value'];

export interface Project {
  id: number;
  name: string | null;
  description: string | null;
  eyeCatchUrl: string | null;
  pitchUrl: string | null;
  fundingGoal: number; // USDC
  totalRaised: number; // USDC | By default 0
  runningDays: number; // assuming 1-90days
  status: ProjectStatus;
  productionStartAt: Date | null;
  productionSchedule: ProductionSchedule[];
  willLaunchAt: Date | null; // Can be input only when status is "approved". Once status turned "running", it cannot be changed.
  launchedAt: Date | null; // Should be the same as willLaunchAt
  movie: Movie | null;
  reward: Reward[];
}

export interface Reward {
  tier: number; // assuming 1-3
  title: string;
  description: string;
  unitPrice: number;
}

interface ProductionSchedule {
  name: string;
  date: Date;
  updatedAt: Date;
  updatedBy: Date;
}

interface Movie {
  title: string;
  story: string;
  category?: MovieCategory;
  genre?: MovieGenre;
  posterVertical?: string;
  posterHorizontal?: string;
  posterSquare?: string;
  runtime: number | null;
  tags: MovieTag[];
  crews: Crew[];
  casts: Cast[];
  videos: Video[];
  releaseDate: Date | null;
  countriesOfOrigin: string[];
  language: string | null;
  filmingLocations: string[];
  productionCompanies: string[];
}

interface Video {
  title: string;
  url: string;
  isTrailer: boolean;
}

interface Crew {
  id: number;
  name: string;
  credit: string;
  socialLink: string;
}

interface Cast {
  id: number;
  name: string;
  character: string;
  socialLink: string;
}
