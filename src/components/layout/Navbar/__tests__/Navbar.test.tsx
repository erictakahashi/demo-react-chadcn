import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

/**
 * Factory function to render the `Navbar` component.
 */
const setup = () => render(<Navbar />)

describe('Navbar', () => {
  it('should render the brand name', () => {
    setup()
    const brand = screen.queryByText('brand name')
    expect(brand).toBeInTheDocument()
  })
})
