import React, { FC } from 'react'

export type OfferItemDetailsProps = {
    description: string;
    price: number;
    size: number
}

const OfferItemDetails: FC<OfferItemDetailsProps> = ({description, price, size}) => {
  return (
    <div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{size}</div>
    </div>
  )
}

export default OfferItemDetails