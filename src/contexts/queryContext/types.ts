import type { PropsWithChildren } from 'react'

export interface IQueryContextProps {
  // States
  routeQuery: boolean
  query: Record<string, string> | null

  // Query Methods
  addQuery: (newQuery: Record<string, string>) => void
  removeQuery: (queryName: string | string[]) => void

  // Route Query Methods
  addRouteQuery: (queryName: string, queryValue: string) => void
  removeRouteQuery: (queryName: string | string[]) => void

  // Forward Query Methods
  forwardAddQuery: (query: Record<string, string>) => void
  forwardDeleteQuery: (queryName: string | string[]) => void
  forwardQuery: Record<string, string> | null
}

export interface IQueryProviderProps extends PropsWithChildren {
  isRouteQuery?: boolean
}
