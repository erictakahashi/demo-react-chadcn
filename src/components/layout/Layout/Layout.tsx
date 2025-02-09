import type { PropsWithChildren } from 'react'

/**
 * The base layout.
 */
const Layout = (props: PropsWithChildren) => {
  const { children } = props

  return <div className="h-screen w-screen">{children}</div>
}

export default Layout
