import {create} from 'zustand'
import {TABLE_ACTION_TYPES} from '../utils/enum'

export const songInitialQueries = {
  page: 0,
  limit: 25,
  search: '',
  sort_by: '',
  sort_order: '',
  filters: {
    filter_song_name: '',
    filter_artist_name: '',
    filter_date_streamed: '',
  },
}

export type SongQueries = typeof songInitialQueries

// * Song list store
interface SongStore {
  query: SongQueries
  dispatch: (action: {type: TABLE_ACTION_TYPES; payload: string | number | null}) => void
}

export const songQueryReducer = (
  query: SongQueries,
  {payload, type}: {payload: any; type: any},
) => {
  switch (type) {
    case TABLE_ACTION_TYPES.SEARCH:
      return {...query, search: payload, page: 0}
    case TABLE_ACTION_TYPES.SORT_BY:
      return {...query, sort_by: payload, page: 0}
    case TABLE_ACTION_TYPES.SORT_ORDER:
      return {...query, sort_order: payload}
    // set selected filters on mount
    case TABLE_ACTION_TYPES.INITIAL_FILTER:
      return {...query, filter: payload}
    case TABLE_ACTION_TYPES.FILTER:
      const {value, filterType} = payload
      return {
        ...query,
        page: 0,
        filters: {
          ...query.filters,
          [filterType]: value,
        },
      }
    case TABLE_ACTION_TYPES.RESET_FILTERS:
      return {...query, filters: songInitialQueries.filters, page: 0}
    case TABLE_ACTION_TYPES.RESET_ALL:
      return songInitialQueries
    case TABLE_ACTION_TYPES.SELECTOR_FILTER:
      return {
        ...query,
        filters: {
          ...query.filters,
          filter_status: payload,
        },
      }
    case TABLE_ACTION_TYPES.PAGE:
      return {...query, page: payload}
    case TABLE_ACTION_TYPES.LIMIT:
      return {...query, limit: payload, page: 0}
    default:
      throw new Error(`Unhandled action type:${type} in song query reducer`)
  }
}

const songQueryDispatcher = (state: SongStore, action: any) => {
  const updatedQuery = songQueryReducer(state.query, action)
  return {
    query: updatedQuery,
  }
}

export const useSongStore = create<SongStore>(set => ({
  query: songInitialQueries,
  dispatch: action => set(state => songQueryDispatcher(state, action)),
}))

// song store ends
