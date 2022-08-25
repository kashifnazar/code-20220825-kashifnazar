import React, { FC } from 'react'
import Offers from '../offers'
import { OfferItemProps } from '../offers/offer-item'
import Section from '../section'


const offerItems: Array<OfferItemProps> = [
    {
        description: 'Room with one king-size bed',
        price: 35,
        size: 28,
        image: '/images/explore-1.png'
    },
    {
        description: 'Penthouse for 8 persons',
        price: 2039,
        size: 438,
        image: '/images/explore-2.png'
    }
]


const Explore: FC = () => 
       (<Section title="Explore" description='From one-guest rooms to penthouses with pools and gardens'>
            <Offers offerItems={offerItems} />
        </Section>)
  


export default Explore