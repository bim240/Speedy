import type {SongQueries} from '../store/dashboard.store'

export const DASHBOARD_QUERIES = {
  totalUser: ['total-user'] as const,
  activeUser: ['active-user'] as const,
  streamUser: ['stream-user'] as const,
  revenue: ['revenue'] as const,
  topArtistOfMonth: ['top-artist-of-month'] as const,
  past12MonthUser: ['past-12-month-user'] as const,
  revenueDistribution: ['revenue-distribution'] as const,
  topTenSong: ['top-ten-songs' as const],
  songList: (queries: SongQueries) => ['song-list', queries] as const,
}
