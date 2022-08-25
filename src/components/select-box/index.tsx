import { FC } from "react";

type SelectBoxProps = {
    title: string
    description: string
}


export const SelectBox: FC<SelectBoxProps> = ({title, description}) => {

    return (<div className="rounded flexbox">
        <div className="select-title"></div>
        <div className="select-description"></div>
    </div>)

}