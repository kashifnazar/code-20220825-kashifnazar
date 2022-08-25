import React, { FC } from 'react'
import OfferItemDetails, { OfferItemDetailsProps } from './offer-item-details';

export type OfferItemProps = {
    image: string;
} & OfferItemDetailsProps

const OfferItem: FC<OfferItemProps> = ({image, description, price, size}) => 
       <div>
            <img src={image} alt={description} />
            <OfferItemDetails {...{price, size, description}}/>
       </div>

export default OfferItem