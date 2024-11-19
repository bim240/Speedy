import React from 'react'
import {useSongStore} from '../../../../store/dashboard.store'
import {TABLE_ACTION_TYPES} from '../../../../utils/enum'
import {useSongList} from '../../../../services/dashboard/dashboard.data'
import classes from './styles.module.css'
import {Table} from '@hybr1d-tech/charizard'
import {format} from 'date-fns'
import {songTableFilter} from '../../../../services/dashboard/dummy-data'

const columns = [
  {
    accessorKey: 'name',
    header: 'Song Name',
    cell: (info: any) => <div className={classes.songName}> {info.getValue()}</div>,
    size: 150,
    enableSorting: true,
  },
  {
    accessorKey: 'artist_name',
    header: 'Artist Name',
    cell: (info: any) => <div className={classes.artistName}>{info.getValue() || ''}</div>,
    size: 230,
    enableSorting: true,
  },
  {
    accessorKey: 'date_streamed',
    header: 'Date Streamed',
    cell: (info: any) => format(info.getValue(), 'dd/MM/yyyy'),
    size: 160,
    enableSorting: true,
  },
  {
    accessorKey: 'date_streamed_at',
    header: 'Date Streamed At',
    cell: (info: any) => <></>,
    size: 160,
    enableSorting: true,
  },
]

export default function SongTable() {
  const query = useSongStore(s => s.query)
  const dispatch = useSongStore(s => s.dispatch)

  const [currentColumn, setCurrentColumn] = React.useState([
    {
      id: 'name',
      label: 'Name',
      checked: true,
    },
    {
      id: 'artist_name',
      label: 'Artist Name',
      checked: true,
    },
    {
      id: 'date_streamed',
      label: 'Date Streamed',
      checked: true,
    },
  ])

  const {data, isError, isLoading, metaData} = useSongList(query)

  const updatedColumn = React.useMemo(() => {
    //  const data =  currentColumn.filter(column => column.checked)
    const columnPresent = columns.filter(column => {
      let flag = false
      currentColumn.forEach(col => {
        if (col.checked && column.accessorKey === col.id) {
          flag = true
        }
      })
      return flag
    })
    return columnPresent
  }, [currentColumn])

  return (
    <>
      <Table
        data={data || []}
        columns={updatedColumn || []}
        searchConfig={{
          search: query.search,
          setSearch: (value: any) => dispatch({type: TABLE_ACTION_TYPES.SEARCH, payload: value}),
          placeholder: 'Search',
        }}
        totalText={`${isLoading ? 'Loading' : 15} Songs `}
        filterConfig={{
          isLoading: false,
          isError: false,
          filters: songTableFilter as unknown as any,
          filterDispatch: value => dispatch({type: TABLE_ACTION_TYPES.FILTER, payload: value}),
          filterReset: () => dispatch({type: TABLE_ACTION_TYPES.RESET_FILTERS, payload: null}),
        }}
        loaderConfig={{
          isFetching: isLoading,
          isError: isError,
          text: 'Getting songs...',
        }}
        paginationConfig={{
          metaData: metaData,
          page: query.page,
          limit: query.limit,
          setPage: value => dispatch({type: TABLE_ACTION_TYPES.PAGE, payload: value}),
          setLimit: value => dispatch({type: TABLE_ACTION_TYPES.LIMIT, payload: value}),
        }}
        sortConfig={{
          sortBy: query.sort_by,
          sortOrd: query.sort_order as any,
          setSortBy: (value: any) => dispatch({type: TABLE_ACTION_TYPES.SORT_BY, payload: value}),
          setSortOrd: (value: any) =>
            dispatch({type: TABLE_ACTION_TYPES.SORT_ORDER, payload: value}),
          sortMap: sortByMappings,
        }}
        customColumnConfig={{
          isPending: false,
          isError: false,
          columns: {
            checked_state: currentColumn,
            is_default: false,
            table_name: 'team_list',
          },
          handleSaveColumns: async columns => {
            setCurrentColumn(columns)
          },
        }}
        tableStyleConfig={{maxHeight: 'calc(100dvh - 280px)', stickyIds: ['name']}}
      />
    </>
  )
}

const sortByMappings = {
  name: 'song.name',
  artist_name: 'song.artist.name',
  date_streamed: 'song.date',
}
