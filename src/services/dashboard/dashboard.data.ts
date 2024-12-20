import {useQuery} from '@tanstack/react-query'
import {dashboardService} from './dashboard.service'
import {DASHBOARD_QUERIES} from '../../utils/queries'
import {SongQueries} from '../../store/dashboard.store'

const svc = new dashboardService()

export const useGetTotalUser = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.totalUser,
    queryFn: svc.getTotalUser,
  })
  return {totalUser: res.data, isTotalUserLoading: res.isLoading, isTotalUserError: res.isError}
}

export const useGetActiveUser = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.activeUser,
    queryFn: svc.getActiveUser,
  })
  return {activeUser: res.data, isActiveUserLoading: res.isLoading, isActiveUserError: res.isError}
}

export const useGetStreamUser = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.streamUser,
    queryFn: svc.getStreamUser,
  })
  return {steamUser: res.data, isSteamUserLoading: res.isLoading, isSteamUserError: res.isError}
}

export const useGetTotalRevenue = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.revenue,
    queryFn: svc.getRevenue,
  })
  return {revenue: res.data, isRevenueLoading: res.isLoading, isRevenueError: res.isError}
}

export const useGetTopArtist = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.topArtistOfMonth,
    queryFn: svc.getTopArtistOfMonth,
  })
  return {topArtistInfo: res.data, isTopArtistLoading: res.isLoading, isTopArtistError: res.isError}
}

export const useGetUserFor12Month = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.past12MonthUser,
    queryFn: svc.getUserDataFor12Month,
  })
  return {data: res.data, isUserLoading: res.isLoading, isUserError: res.isError}
}

export const useGetRevenueDistribution = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.revenueDistribution,
    queryFn: svc.getRevenueDistribution,
  })
  return {data: res.data, isLoading: res.isLoading, isError: res.isError}
}

export const useGetTopTenSongs = () => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.topTenSong,
    queryFn: svc.getTopTenSongs,
  })
  return {data: res.data, isLoading: res.isLoading, isError: res.isError}
}

export const useSongList = (query: SongQueries) => {
  const res = useQuery({
    queryKey: DASHBOARD_QUERIES.songList(query),
    queryFn: () => svc.getSongList(query),
  })
  return {
    data: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
    metaData: {
      total_items: 10,
      page_no: 0,
      items_on_page: 10,
    },
  }
}
