import {SongQueries} from '../../store/dashboard.store'
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
import {buildFilterQuery} from '../../utils/helper/table'
import {
  activeUserData,
  revenueData,
  revenueDistribution,
  songList,
  streamUserData,
  top10Songs,
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
  async getRevenueDistribution(): Promise<Record<string, string | number>[]> {
    // make api call here
    return revenueDistribution
  }
  async getTopTenSongs(): Promise<SongDetails[]> {
    // make api call here
    return top10Songs
  }

  async getSongList(query: SongQueries): Promise<SongListResponse[]> {
    //create params for api call
    const params = {
      page: query.page,
      limit: query.limit,
      search: query.search ? query.search : '',
      sort_by: query.sort_by ? query.sort_by : undefined,
      sort_order: query.sort_order ? query.sort_order : undefined,
      ...buildFilterQuery(query.filters),
    }
    console.log({params})
    // make api call here
    return songList
  }
}
