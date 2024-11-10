export const buildFilterQuery = (
  queryFilters: {[key: string]: any},
  exclude: string[] = [],
): {[key: string]: any} => {
  const filters: {[key: string]: any} = {}

  if (queryFilters) {
    Object.keys(queryFilters).forEach(key => {
      if (queryFilters![key] && !exclude.includes(key)) {
        filters[key] = queryFilters![key]
      }
    })
  }

  return filters
}
