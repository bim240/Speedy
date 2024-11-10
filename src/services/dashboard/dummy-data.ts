import type {
  ActiveUserResponse,
  RevenueResponse,
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
