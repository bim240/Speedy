import type {
  ActiveUserResponse,
  RevenueResponse,
  StreamUserResponse,
  TopArtistOfMonthResponse,
  TotalUserResponse,
  UserDataFor12Month,
} from '../../types/dashboard.type'
import {
  activeUserData,
  revenueData,
  streamUserData,
  topArtistData,
  totalUserData,
  userDataFor12Month,
} from './dummy-data'

export class dashboardService {
  async getTotalUser(): Promise<TotalUserResponse> {
    // make api call here
    return totalUserData
  }
  async getActiveUser(): Promise<ActiveUserResponse> {
    // make api call here
    return activeUserData
  }

  async getStreamUser(): Promise<StreamUserResponse> {
    // make api call here
    return streamUserData
  }
  async getRevenue(): Promise<RevenueResponse> {
    // make api call here
    return revenueData
  }
  async getTopArtistOfMonth(): Promise<TopArtistOfMonthResponse> {
    // make api call here
    return topArtistData
  }
  async getUserDataFor12Month(): Promise<UserDataFor12Month[]> {
    // make api call here
    return userDataFor12Month
  }
}
