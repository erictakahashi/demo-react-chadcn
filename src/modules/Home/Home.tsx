import { Navbar } from '../../components/Navbar'

/**
 * The Home page component.
 */
export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Frontend Challenge</h1>
        <p>Start building the UI based on the Figma design.</p>
      </div>
    </div>
  )
}
