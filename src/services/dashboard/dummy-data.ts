import type {
  ActiveUserResponse,
  RevenueResponse,
  StreamUserResponse,
  TopArtistOfMonthResponse,
  TotalUserResponse,
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
