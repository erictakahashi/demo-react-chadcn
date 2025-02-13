import React from 'react'
import { Button } from "~/components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">brand name</h1>
        <Button>test</Button>
      </div>
    </nav>
  )
}

export default Navbar
