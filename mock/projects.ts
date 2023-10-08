import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'I WANT YOU FOR U.S.ARMY - A Comedy Short Film',
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1580130857334-2f9b6d01d99d',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 400000,
    totalRaised: 0,
    runningDays: 60,
    status: 'draft',
    willLaunchAt: null,
    launchedAt: null,
    productionStartAt: new Date('2023-11-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: 'I WANT YOU FOR U.S.ARMY -NEAREST RECRUITING STATION-',
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 150,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 500,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 100,
      },
    ],
  },
  {
    id: 2,
    name: 'MONTREAL Winter Sports',
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1584448141569-69f342da535c',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 9000, // $10,000 USDC
    totalRaised: 0,
    runningDays: 30,
    status: 'pending-approval',
    willLaunchAt: null,
    launchedAt: null,
    productionStartAt: new Date('2023-11-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: 'MONTREAL Winter Sports',
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 135,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 500,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 100,
      },
    ],
  },
  {
    id: 3,
    name: 'Orphan doll - A crazy horror',
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1613679074971-91fc27180061',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 10000, // $10,000 USDC
    totalRaised: 0,
    runningDays: 60, // 30 days
    willLaunchAt: null,
    launchedAt: null,
    status: 'revision-required',
    productionStartAt: new Date('2023-11-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: 'Orphan doll',
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 120,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 1000,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 1000,
      },
    ],
  },
  {
    id: 4,
    name: "DON'T KILL OUR WILD LIFE - We reveal the real",
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1580130732478-4e339fb6836f',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 8000,
    totalRaised: 0,
    runningDays: 60,
    status: 'approved',
    willLaunchAt: new Date('2023-12-01'),
    launchedAt: null,
    productionStartAt: new Date('2024-03-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: "DON'T KILL OUR WILD LIFE",
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 40,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 1000,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 1000,
      },
    ],
  },
  {
    id: 5,
    name: 'He returned - Horror movie',
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1611419010196-a360856fc42f',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 4000,
    totalRaised: 1600,
    runningDays: 90,
    status: 'running',
    willLaunchAt: new Date('2023-09-01'),
    launchedAt: new Date('2023-09-01'),
    productionStartAt: new Date('2023-11-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: 'He returned',
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 120,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 1000,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 1000,
      },
    ],
  },
  {
    id: 6,
    name: 'LOVE TRUTH AGAIN',
    description: 'This is a sample project description.',
    eyeCatchUrl: 'https://images.unsplash.com/photo-1523586797235-580376c5d862',
    pitchUrl: 'https://example.com/pitch.mp4',
    fundingGoal: 10000,
    totalRaised: 9000,
    runningDays: 30,
    status: 'finished',
    willLaunchAt: new Date('2023-09-01'),
    launchedAt: new Date('2023-09-01'),
    productionStartAt: new Date('2023-11-01'),
    productionSchedule: [
      {
        name: 'Pre-production',
        date: new Date('2023-11-01'),
        updatedAt: new Date('2023-10-01'),
        updatedBy: new Date('2023-10-01'),
      },
      {
        name: 'Production',
        date: new Date('2023-12-01'),
        updatedAt: new Date('2023-11-01'),
        updatedBy: new Date('2023-11-01'),
      },
    ],
    movie: {
      title: 'LOVE TRUTH AGAIN',
      story: 'This is a sample movie story.',
      category: 'film',
      genre: 'comedy',
      posterVertical: 'https://example.com/poster_vertical.jpg',
      posterHorizontal: 'https://example.com/poster_horizontal.jpg',
      posterSquare: 'https://example.com/poster_square.jpg',
      runtime: 90,
      tags: ['adventure', 'romance'],
      crews: [
        {
          id: 101,
          name: 'John Doe',
          credit: 'Director',
          socialLink: 'https://example.com/johndoe',
        },
        {
          id: 102,
          name: 'Jane Smith',
          credit: 'Producer',
          socialLink: 'https://example.com/janesmith',
        },
      ],
      casts: [
        {
          id: 201,
          name: 'Actor 1',
          character: 'Character 1',
          socialLink: 'https://example.com/actor1',
        },
        {
          id: 202,
          name: 'Actor 2',
          character: 'Character 2',
          socialLink: 'https://example.com/actor2',
        },
      ],
      videos: [
        {
          title: 'Trailer',
          url: 'https://example.com/trailer.mp4',
          isTrailer: true,
        },
        {
          title: 'Behind the Scenes',
          url: 'https://example.com/behind_the_scenes.mp4',
          isTrailer: false,
        },
      ],
      releaseDate: new Date('2024-01-15'),
      countriesOfOrigin: ['USA'],
      language: 'English',
      filmingLocations: ['Los Angeles, CA'],
      productionCompanies: ['Sample Productions'],
    },
    reward: [
      {
        tier: 1,
        title: 'VIP Support',
        description: 'Thank you for your support!',
        unitPrice: 1000,
      },
      {
        tier: 2,
        title: 'Premium Support',
        description: 'Get early access and a special thank you.',
        unitPrice: 1000,
      },
      {
        tier: 3,
        title: 'Basic Support',
        description: 'Join us on set and get exclusive perks.',
        unitPrice: 1000,
      },
    ],
  },
];
