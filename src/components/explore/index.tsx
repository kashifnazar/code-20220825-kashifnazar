import { FC } from 'react'
import { WithImage } from '../../types/with-image'
import OfferItem, { OfferItemProps } from './offer-item'
import Section from '../section'


const offerItems: Array<WithImage<OfferItemProps>> = [
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

const getItemDetails = (offer: OfferItemProps) => <OfferItem {...offer} />

const Explore: FC = () => <Section<OfferItemProps> getItemDetails={getItemDetails} title="Explore" description='From one-guest rooms to penthouses with pools and gardens' galleryItems={offerItems}/>
  


export default Explore