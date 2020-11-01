import React from 'react'
import CategoryCard from './CategoryCard'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


const CategoryCardGroup = () => {

    return (
        <div>
            <section>
                <div>
                    <Typography>this is category tile</Typography>
                    <Button> See All<NavigateNextIcon /> </Button>
                </div>
                <div>
                    {/* TODO: CardをLsitで表示 */}
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default CategoryCardGroup
