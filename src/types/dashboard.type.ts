export interface TotalUserResponse {
  total: string
  increase_percentage: string
  decrease_percentage: string
  change: number
}

export interface ActiveUserResponse {
  total: string
  increase_percentage: string
  decrease_percentage: string
  change: number
}

export interface StreamUserResponse {
  total: string
  increase_percentage: string
  decrease_percentage: string
  change: number
}

export interface TopArtistOfMonthResponse {
  name: string
  img: string
  country: string
  id: string
}

export interface RevenueResponse {
  total: string
  increase_percentage: string
  decrease_percentage: string
  change: number
}

export interface UserDataFor12Month {
  name: string
  value: number
}
