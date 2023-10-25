import React from 'react'
import { Logo } from '../Components/Logo'
import { Menu } from '../Components/Menu';

function Navbar() {
  return (
    <div className='flex items-center mb-12 justify-between'>

      <Logo bgColor='bg-primary-blue' tColor='text-white' textColor='text-black'/>

      <Menu items={[
          { text: 'Home', bold: true },
          { text: 'Find a doctor', bold: false },
          { text: 'Apps', bold: false },
          { text: 'Testimonials', bold: false },
          { text: 'About us', bold: false },
          { text: 'Login', bold: false }
        ]}
      />
    </div>
  )
}

export {Navbar};