import { render, screen } from '@testing-library/react'
import { NotFound } from '../NotFound'

/**
 * Factory function to render the `NotFound` component.
 */
const setup = () => render(<NotFound />)

describe('NotFound', () => {
  const pageNotFoundTxt = 'Page not found'

  it('should render not found content', () => {
    setup()

    const pageNotFound = screen.queryByText(pageNotFoundTxt)
    expect(pageNotFound).toBeInTheDocument()
  })
})
