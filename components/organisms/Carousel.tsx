import Carousel from 'react-material-ui-carousel'
import CrouselCard from '../molcules/CrouselCard'

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
            content: "this is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is content",
            imageId: 1,
        },
        {
            id: 2,
            title: "abstract title2",
            content: "this is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is contentthis is content",
            imageId: 2,
        }
    ]
    
    return (
        <Carousel>
            { 
                cards.map( (card, i) => <CrouselCard key={i} card={card} /> )
            }
        </Carousel>
    )
}

export default AbstCarousel
