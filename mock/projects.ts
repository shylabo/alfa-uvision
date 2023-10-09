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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
      story: `
      LOGLINE:
      "In a world teetering on the brink of chaos, a disparate group of individuals from all walks of life is brought together by an unexpected twist of fate when they discover a long-forgotten World War II-era recruitment poster. Inspired by its timeless message, they embark on a heartfelt journey to reignite the spirit of unity and patriotism, proving that heroes can emerge from the unlikeliest of places."

      STORY:
      In a time when division and discord seemed to be the order of the day, fate intervened in the most unexpected way. Tucked away in the attic of an old, dilapidated building, a group of urban explorers stumbled upon a dusty relic from the past – a World War II-era recruitment poster featuring Uncle Sam pointing directly at the viewer, beneath the bold caption: "I WANT YOU FOR U.S. ARMY - NEAREST RECRUITING STATION."
      This discovery was not just an accident; it was a catalyst for change. The poster's message of unity and duty resonated deeply with this diverse group of explorers, who hailed from different backgrounds, cultures, and beliefs. They saw it as a beacon of hope, a reminder of a time when the nation had come together to face a common enemy.
      Inspired by the poster's powerful call to action, they made it their mission to revive the spirit of unity and patriotism that it represented. United by a shared purpose, they embarked on a journey to connect with people across the country, sharing stories of everyday heroes who had made a difference in their communities. They documented these tales of courage, selflessness, and resilience, turning them into a documentary that showcased the strength of the American spirit.
      Along the way, they encountered challenges, skepticism, and even moments of doubt, but their unwavering belief in the poster's message and the power of unity kept them going. As they continued their journey, they also discovered that the poster's original model, a World War II veteran now in his nineties, was still alive. His experiences and wisdom added a poignant layer to their story, reinforcing the idea that heroism knows no age.
      Their efforts culminated in a nationwide event where they displayed the restored poster, alongside their documentary, in a public exhibition that celebrated the unsung heroes of today. The event brought together people from all walks of life, reminding everyone that despite their differences, they could come together as one in the face of adversity, just like their predecessors from World War II.

      VISION:
      Our vision is to breathe life back into a forgotten piece of American history and, in doing so, inspire a new generation of unity and patriotism. Through our crowdfunding campaign, we aim to fund the production and distribution of a documentary that tells the compelling story of our journey to resurrect the spirit of the iconic "I WANT YOU FOR U.S. ARMY" recruitment poster.
      We envision a film that not only captivates audiences with its inspiring narrative but also reminds them of the values that have always defined our nation: unity, selflessness, and resilience. By sharing the stories of ordinary people doing extraordinary things, we hope to reignite the sense of duty and purpose that the poster symbolized during World War II.
      Through our campaign, we will engage backers in our mission, offering them exclusive access to behind-the-scenes footage, interviews, and interactive experiences that allow them to connect with the project on a personal level. We will also organize events and exhibitions across the country, bringing the restored poster to communities far and wide, sparking discussions, and fostering a sense of pride in our shared heritage.
      Join us in this endeavor to revive a powerful piece of American history and, more importantly, to remind our nation that unity and heroism are values that transcend time and circumstance. Together, we can prove that the message of "I WANT YOU FOR U.S. ARMY" is as relevant today as it was during World War II, and that the true strength of America lies in its people, working together for a brighter future.
      `,
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
