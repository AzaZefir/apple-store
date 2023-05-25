import React from 'react'
import { About } from '../components/main/about/About'
import { Cases } from '../components/main/cases/Cases'
import { HeadPhones } from '../components/main/headPhones/HeadPhones'
import { WirelessHeadPhones } from '../components/main/wirelessHeadPhones/WirelessHeadPhones'

export const HomePage = () => {
  return (
    <main className='home-page'>
      <About/>
      <Cases/>
      <HeadPhones/>
      <WirelessHeadPhones/>
    </main>
  )
}
