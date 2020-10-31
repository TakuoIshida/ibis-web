import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import AbstCard from './AbstCard'

type cardsType = {
    id: number,
    title: string,
    content: string,
    imageId: number,
}
const AbstCarousel = () => {
    
    const cards: cardsType[] = [
        {
            id: 1,
            title: "abstract title",
            content: "this is content",
            imageId: 1,
        },
        {
            id: 2,
            title: "abstract title2",
            content: "this is content2",
            imageId: 2,
        }
    ]
    
    return (
        <Carousel>
            { 
                cards.map( (card, i) => <AbstCard key={i} card={card} /> )
            }
        </Carousel>
    )
}

export default AbstCarousel

// ※CaroucelのCardとCategory別に表示しているCardを共通化するかは、未定
