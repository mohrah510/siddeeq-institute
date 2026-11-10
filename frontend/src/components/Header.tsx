import { useState } from 'react'

function Header() {
  const [currentPage, setCurrentPage] = useState('Home')
  
  return (
    <header>
    <p>siddeeqinstitute@gmail.com</p>
    <h1>As-Siddeeq Institute</h1>
    <p>Sister branch: A’ishah Institute</p>
    <nav>
    <a
    href="#"
    className={currentPage === 'Home' ? 'current' : ''}
    onClick={() => setCurrentPage('Home')}
    >
    Home
    </a>
    <a
    href="#"
    className={currentPage === 'About' ? 'current' : ''}
    onClick={() => setCurrentPage('About')}
    >
    About
    </a>
    <a
    href="#"
    className={currentPage === 'A’ishah Institute' ? 'current' : ''}
    onClick={() => setCurrentPage('A’ishah Institute')}
    >
    A’ishah Institute
    </a>
    <a
    href="#"
    className={currentPage === 'Youth Corner' ? 'current' : ''}
    onClick={() => setCurrentPage('Youth Corner')}
    >
    Youth Corner
    </a>
    <a
    href="#"
    className={currentPage === 'Donate' ? 'current' : ''}
    onClick={() => setCurrentPage('Donate')}
    >
    Donate
    </a>
    <a
    href="#"
    className={currentPage === 'Events' ? 'current' : ''}
    onClick={() => setCurrentPage('Events')}
    >
    Events
    </a>
    <a
    href="#"
    className={currentPage === 'Registration' ? 'current' : ''}
    onClick={() => setCurrentPage('Registration')}
    >
    Registration
    </a>
    <a
    href="#"
    className={currentPage === 'Multimedia' ? 'current' : ''}
    onClick={() => setCurrentPage('Multimedia')}
    >
    Multimedia
    </a>
    <a
    href="#"
    className={currentPage === 'Contact' ? 'current' : ''}
    onClick={() => setCurrentPage('Contact')}
    >
    Contact
    </a>
    </nav>
    </header>
  )
}

export default Header
