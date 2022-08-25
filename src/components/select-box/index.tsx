import { FC } from "react";

import './select-box.css'

export type SelectBoxProps = {
    title: string
    description: string
}


export const SelectBox: FC<SelectBoxProps> = ({title, description}) => {
    return (
        <div className="select-box vertical flexbox filter-item">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>)

}