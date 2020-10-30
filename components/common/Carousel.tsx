import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

const ImgCarousel = () => {
    
    var items = [
        {
            id: 1,
            title: "abstract title",
            content: "COVID",
            imageId: 1,
        },
        {
            id: 2,
            title: "abstract title2",
            content: "COVID2",
            imageId: 2,
        }
    ]
    
    return (
        <Carousel>
            { items.map( (item, i) => <Item key={i} item={item} /> ) }
        </Carousel>
    )
}

export default ImgCarousel

type caroucelProp = {
    item: {
        id: number,
        title: string,
        content: string,
        imageId: number,
    }
}

const Item = (props: caroucelProp) =>
{
    return (
        <Paper>
            <h2>{props.item.id}</h2>
            <h2>{props.item.title}</h2>
            <p>{props.item.content}</p>
            <img height="60px" src={`/img/${props.item.imageId}.jpg`} />
        </Paper>
    )
}
