import React, { FC } from 'react'
import OfferItem, { OfferItemProps } from './offer-item'

import './offers.css'

export type OffersProps = {
    offerItems: Array<OfferItemProps>
}

const Offers: FC<OffersProps> = ({offerItems}) => <div className='offers'>{offerItems.map(offer => <OfferItem key={offer.image} {...offer} />)}</div>

export default Offers