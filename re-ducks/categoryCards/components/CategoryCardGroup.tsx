import React from 'react'
import CategoryCard from './CategoryCard'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


const CategoryCardGroup = () => {
    // TODO: useContext を使う
    const cards = [
        {
            id: 1,
            title: "title1",
            content: "content1",
            imageId: 1,
        },
        {
            id: 2,
            title: "title2",
            content: "content2",
            imageId: 2,
        },
        {
            id: 3,
            title: "title3",
            content: "content3",
            imageId: 3,
        }
    ]
    return (
        <div>
            <section>
                <div>
                    <Typography>this is category tile</Typography>
                    <Button> See All<NavigateNextIcon /> </Button>
                </div>
                <div>
                    <ul>
                    {cards.map( (card, i) => {
                        return(
                        <CategoryCard key={i} card={card}/>
                        )
                    })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default CategoryCardGroup
