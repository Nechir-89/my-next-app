import React from 'react'
import './style.css'
import Link from 'next/link'

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <header>
      <h2>Applications/Pages</h2>
      <nav>
        <div><Link href='/'>Home</Link></div>
        <div><Link href='/flexLayout'>flex-grow</Link></div>
        <div><Link href='/displaySomeLines'>display some lines</Link></div>
        <div><Link href='/counter-set'>Counter-set</Link></div>

      </nav>
    </header>
  )
}