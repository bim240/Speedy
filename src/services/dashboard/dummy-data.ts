import {format} from 'date-fns'
import type {
  ActiveUserResponse,
  RevenueResponse,
  SongDetails,
  SongListResponse,
  StreamUserResponse,
  TopArtistOfMonthResponse,
  TotalUserResponse,
  UserDataFor12Month,
} from '../../types/dashboard.type'

export const totalUserData: TotalUserResponse = {
  total: '12,000',
  increase_percentage: '33.33%',
  decrease_percentage: '0',
  change: 4000,
}

export const activeUserData: ActiveUserResponse = {
  total: '10,000',
  increase_percentage: '50%',
  decrease_percentage: '0',
  change: 5000,
}

export const streamUserData: StreamUserResponse = {
  total: '5,000',
  increase_percentage: '50%',
  decrease_percentage: '0',
  change: 2500,
}

export const revenueData: RevenueResponse = {
  total: '$20,000',
  increase_percentage: '50%',
  decrease_percentage: '0',
  change: 10000,
}

export const topArtistData: TopArtistOfMonthResponse = {
  name: 'Speedy Singh',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_d2vtwIHTuSJvjt-RLoS4XB1gAGjzYMSpqQ&s',
  country: 'India',
  id: '123-1234-3455',
}

export const userDataFor12Month: UserDataFor12Month[] = [
  {
    name: 'Dec 2023',
    value: 200,
  },
  {
    name: 'Jan 2024',
    value: 400,
  },
  {
    name: 'Feb 2024',
    value: 500,
  },
  {
    name: 'March 2024',
    value: 600,
  },
  {
    name: 'April 2024',
    value: 700,
  },
  {
    name: 'May 2024',
    value: 800,
  },
  {
    name: 'June 2024',
    value: 700,
  },
  {
    name: 'July 2024',
    value: 800,
  },
  {
    name: 'Aug 2024',
    value: 500,
  },
  {
    name: 'Sep 2024',
    value: 600,
  },
  {
    name: 'Oct 2024',
    value: 800,
  },
  {
    name: 'Nov 2024',
    value: 500,
  },
]

export const revenueDistribution: Record<string, string | number>[] = [
  {
    name: 'Ads',
    value: 700,
  },
  {
    name: 'Subscription',
    value: 800,
  },
  {
    name: 'Royalties',
    value: 700,
  },
  {
    name: 'Downloads',
    value: 700,
  },
]

export const top10Songs: SongDetails[] = [
  {
    artist: {
      name: 'Tiger Tiger',
      country: 'India',
      img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
      id: '1',
    },
    name: 'Dil Tere naam',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    id: '1',
  },
  {
    artist: {
      name: 'Tiger Tiger',
      country: 'India',
      img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
      id: '2',
    },
    name: 'Dil Tere naam',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    id: '2',
  },
  {
    artist: {
      name: 'Tiger Tiger',
      country: 'India',
      img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
      id: '3',
    },
    name: 'Dil Tere naam',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    id: '3',
  },
  {
    artist: {
      name: 'Tiger Tiger',
      country: 'India',
      img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
      id: '4',
    },
    name: 'Dil Tere naam',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    id: '4',
  },
  {
    artist: {
      name: 'Tiger Tiger',
      country: 'India',
      img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
      id: '5',
    },
    name: 'Dil Tere naam',
    language: 'Hindi',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    id: '5',
  },
  // {
  //   artist: {
  //     name: 'Tiger Tiger',
  //     country: 'India',
  //     img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
  //     id: '6',
  //   },
  //   name: 'Dil Tere naam',
  //   language: 'Hindi',
  //   url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  //    id: '6',
  // },
  // {
  //   artist: {
  //     name: 'Tiger Tiger',
  //     country: 'India',
  //     img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
  //     id: '7',
  //   },
  //   name: 'Dil Tere naam',
  //   language: 'Hindi',
  //   url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  //    id: '7',
  // },
  // {
  //   artist: {
  //     name: 'Tiger Tiger',
  //     country: 'India',
  //     img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
  //     id: '8',
  //   },
  //   name: 'Dil Tere naam',
  //   language: 'Hindi',
  //   url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  //    id: '8',
  // },
  // {
  //   artist: {
  //     name: 'Tiger Tiger',
  //     country: 'India',
  //     img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
  //     id: '9',
  //   },
  //   name: 'Dil Tere naam',
  //   language: 'Hindi',
  //   url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  //    id: '9',
  // },
  // {
  //   artist: {
  //     name: 'Tiger Tiger',
  //     country: 'India',
  //     img: 'https://cdn.pixabay.com/photo/2024/05/01/23/57/dog-8733419_1280.png',
  //     id: '10',
  //   },
  //   name: 'Dil Tere naam',
  //   language: 'Hindi',
  //   url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  //    id: '10',
  // },
]

export const songList: SongListResponse[] = [
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '1',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '2',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '3',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '4',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '5',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '6',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '7',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '8',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '9',
  },
  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '10',
  },

  {
    name: 'Hello',
    artist_name: 'Arijit singh',
    date_streamed: new Date(),
    id: '11',
  },
]

export const songTableFilter = {
  header: [],
  drawer: [
    {
      id: 'name',
      name: 'Type',
      key: 'filter_song_name',
      options: [
        {
          name: 'Tere liye',
          value: '1a6c4a2d-2c03-4e19-8f25-8e8c2e09a562',
        },
      ],
      config: {
        hideSearch: false,
        placeholder: 'Search for song name',
      },
    },
    {
      id: 'artist_name',
      name: 'Artist Name',
      key: 'filter_name',
      options: [
        {
          name: 'Arijit singh',
          value: 'f76e669c-78b0-4b7b-93a5-37a5bfa4d29c',
        },
      ],
      config: {
        hideSearch: true,
        placeholder: 'Search artist',
      },
    },
    {
      id: 'date_streamed',
      name: 'Streamed Date',
      key: 'filter_date_streamed',
      options: [
        {
          value: 'abdadf28-76e0-412e-ad18-068dfbe43ec9',
          name: format(new Date(), 'dd/MM/yyyy'),
        },
      ],
      config: {
        hideSearch: false,
        placeholder: 'Search by date',
      },
    },
  ],
}
