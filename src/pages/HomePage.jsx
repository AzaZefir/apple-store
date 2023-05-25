import React from 'react'
import { About } from '../components/main/about/About'
import { Cases } from '../components/main/cases/Cases'

export const HomePage = () => {
  return (
    <main className='home-page'>
      <About/>
      <Cases/>
    </main>
  )
}
