export const PROJECT_STATUS = {
  DRAFT: 'draft', // User can do "delete" | "update"
  PENDING_APPROVAL: 'pending-approval', // In other words, "submitted". User can do "cancel submission" and status goes "draft"
  REVISION_REQUIRED: 'revision-required', // User can "update" | "cancel submission"
  APPROVED: 'approved', // User can "delete" | "launch"
  RUNNING: 'running', // User can do nothing about status
  FINISHED: 'finished', // User can do nothing about status
} as const

export const MOVIE_CATEGORIES = [
  {
    value: 'film',
    label: 'Film',
  },
  {
    value: 'documentary',
    label: 'Documentary',
  },
  {
    value: 'series',
    label: 'Series',
  },
  {
    value: 'animation',
    label: 'Animation',
  },
] as const

export const MOVIE_GENRES = [
  {
    value: 'comedy',
    label: 'Comedy',
  },
  {
    value: 'fantasy',
    label: 'Fantasy',
  },
  {
    value: 'romantic',
    label: 'Romantic',
  },
  {
    value: 'crime',
    label: 'Crime',
  },
  {
    value: 'epic',
    label: 'Epic',
  },
  {
    value: 'sci-fi',
    label: 'Sci-Fi',
  },
  {
    value: 'western',
    label: 'Western',
  },
  {
    value: 'action-adventure',
    label: 'Action Adventure',
  },
  {
    value: 'drama',
    label: 'Drama',
  },
  {
    value: 'horror',
    label: 'Horror',
  },
  {
    value: 'thriller',
    label: 'Thriller',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
] as const

export const MOVIE_TAGS = [
  {
    value: 'action',
    label: 'Action',
  },
  {
    value: 'adventure',
    label: 'Adventure',
  },
  {
    value: 'comedy',
    label: 'Comedy',
  },
  {
    value: 'drama',
    label: 'Drama',
  },
  {
    value: 'fantasy',
    label: 'Fantasy',
  },
  {
    value: 'horror',
    label: 'Horror',
  },
  {
    value: 'romance',
    label: 'Romance',
  },
  {
    value: 'science-fiction',
    label: 'Science Fiction',
  },
  {
    value: 'thriller',
    label: 'Thriller',
  },
  {
    value: 'crime',
    label: 'Crime',
  },
  {
    value: 'mystery',
    label: 'Mystery',
  },
  {
    value: 'animation',
    label: 'Animation',
  },
  {
    value: 'family',
    label: 'Family',
  },
  {
    value: 'history',
    label: 'History',
  },
  {
    value: 'documentary',
    label: 'Documentary',
  },
  {
    value: 'war',
    label: 'War',
  },
  {
    value: 'musical',
    label: 'Musical',
  },
  {
    value: 'western',
    label: 'Western',
  },
  {
    value: 'superhero',
    label: 'Superhero',
  },
  {
    value: 'biography',
    label: 'Biography',
  },
] as const
