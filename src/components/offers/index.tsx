import React, { FC } from 'react'
import OfferItem, { OfferItemProps } from './offer-item'

export type OffersProps = {
    offerItems: Array<OfferItemProps>
}

const Offers: FC<OffersProps> = ({offerItems}) => <div>{offerItems.map(offer => <OfferItem key={offer.image} {...offer} />)}</div>

export default Offers