// Hooks
import { createContext, useContext, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

// Types
import type { IQueryContextProps, IQueryProviderProps } from './types'

// Default values for the context
const defaultValues: IQueryContextProps = {
  routeQuery: false,
  query: null,
  addQuery: () => {},
  removeQuery: () => {},
  addRouteQuery: () => {},
  removeRouteQuery: () => {},
  forwardAddQuery: () => {},
  forwardDeleteQuery: () => {},
  forwardQuery: {},
}

// Create filter context
const QueryContext = createContext<IQueryContextProps>(defaultValues)

const QueryProvider = ({ children, isRouteQuery = true }: IQueryProviderProps) => {
  const location = useLocation()
  const [query, setQuery] = useState<Record<string, string> | null>(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const addQuery = (newQuery: Record<string, string>) => {
    const previousQueries = query
    previousQueries?.page && delete previousQueries.page

    setQuery({ ...previousQueries, ...newQuery })
  }

  const removeQuery = (queryName: string | string[]) => {
    const queryObject = query
    if (typeof queryName === 'object') {
      queryName.forEach((query) => {
        queryObject && delete queryObject[query]
      })
    } else {
      queryObject && delete queryObject[queryName]
    }
    queryObject?.page && delete queryObject.page
    setQuery(!!queryObject && !!Object.entries(queryObject).length ? queryObject : null)
  }

  const addRouteQuery = (queryName: string, queryValue: string) => {
    const prams = new URLSearchParams(location.search)

    if (prams.get('page') && queryName !== 'page') prams.delete('page')
    setSearchParams((prevPrams) => ({ ...Object.fromEntries(prevPrams), ...{ [queryName]: queryValue } }))
  }

  const addRouteQueries = (query: Record<string, string>) => {
    const hash = window.location.hash.split('?')[1] || ''
    const currentParams = new URLSearchParams(hash)

    // Merge existing params with the new query
    const mergedParams = { ...Object.fromEntries(currentParams), ...query }

    if (Object.keys(query).some((key: string) => key !== 'page')) {
      mergedParams.page = '1'
    }
    // Update the search params
    setSearchParams(new URLSearchParams(mergedParams))
  }

  const removeRouteQuery = (queryName: string | string[]) => {
    if (searchParams.get('page') && queryName !== 'page') searchParams.delete('page')
    if (typeof queryName === 'object') {
      queryName.forEach((query) => {
        searchParams.delete(query)
      })
    } else {
      searchParams.delete(queryName)
    }

    setSearchParams(searchParams)
  }

  const forwardAddQuery = isRouteQuery ? addRouteQueries : addQuery

  const forwardDeleteQuery = isRouteQuery ? removeRouteQuery : removeQuery

  const objOfSearchParams = Object.fromEntries(Array.from(searchParams))

  const forwardQuery = isRouteQuery ? objOfSearchParams : query

  return (
    <QueryContext.Provider
      value={{
        routeQuery: isRouteQuery,
        query,
        addQuery,
        removeQuery,
        addRouteQuery,
        removeRouteQuery,
        forwardAddQuery,
        forwardDeleteQuery,
        forwardQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default QueryProvider

export const useQuery = () => {
  const context = useContext(QueryContext)
  if (context === undefined) {
    // Return a default value if no context is provided
    return defaultValues
  }
  return context
}
