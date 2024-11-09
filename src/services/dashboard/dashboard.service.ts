import type {
  ActiveUserResponse,
  RevenueResponse,
  StreamUserResponse,
  TopArtistOfMonthResponse,
  TotalUserResponse,
} from '../../types/dashboard.type'
import {
  activeUserData,
  revenueData,
  streamUserData,
  topArtistData,
  totalUserData,
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
}
