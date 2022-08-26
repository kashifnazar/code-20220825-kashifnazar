import React, { FC } from 'react'
import Section from '../section'
import { ChapterProps } from './chapter'


const chapterItems: Array<ChapterProps> = [{
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

const AboutUs: FC = () => <Section<ChapterProps> title="About Us" description='Allow us to tell you a short story...' galleryItems={chapterItems}/>

export default AboutUs