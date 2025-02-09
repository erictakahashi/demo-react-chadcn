import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

/**
 * The main application provider.
 */
const AppProvider = (props: PropsWithChildren) => {
  const { children } = props

  return <BrowserRouter>{children}</BrowserRouter>
}

export default AppProvider
