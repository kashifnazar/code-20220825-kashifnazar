import React, { FC } from 'react'
import { WithImage } from '../../types/with-image'
import Section from '../section'
import Chapter, { ChapterProps } from './chapter'


const chapterItems: Array<WithImage<ChapterProps>> = [{
    title: 'Chapter I',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
    image: '/images/chapter-1.png'
},{
    title: 'Chapter II',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
    image: '/images/chapter-2.png'
},{
    title: 'Chapter III',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
    image: '/images/explore-2.png'
},{
    title: 'Chapter IV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
    image: '/images/explore-1.png'
}
]

const getItemDetails = (chapter: ChapterProps) => <Chapter {...chapter} />

const AboutUs: FC = () => <Section<ChapterProps> getItemDetails={getItemDetails} title="About Us" description='Allow us to tell you a short story...' galleryItems={chapterItems}/>

export default AboutUs