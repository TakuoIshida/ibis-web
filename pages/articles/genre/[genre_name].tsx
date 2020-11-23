import { useRouter } from 'next/router'
import { get } from '../../../util/function'
import { BASE_URL } from '../../../util/settings'
import { ArticleList } from '../../../util/sample-data'

export async function getServerSideProps(props: any) {
    // props.query = { genre_name: 'genrename' } でわたってくる
    // const { genre_name } = props.query
    const url: string = BASE_URL + props.resolvedUrl
    const data: ArticleList = await get(url)
    return {
        props: {data}
    }
}
type propsType = {
    data: ArticleList
}
const Genre = (props: propsType) => {
    const router = useRouter()
    const { genre_name } = router.query
    
    console.log(props)
    return (
        <>
        <div>
            <p>{genre_name}</p>
        </div>
        <div>
            {props.data.map((item, i) => {
                return(
                    <div key={i}>
                        <ul>
                            <li>{item.Title}</li>
                            <li>{item.Journal}</li>
                            <li>{item.OriginalURL}</li>
                            <li>{item.PublishDate}</li>
                        </ul>
                    </div>
                    )
            })}
        </div>
        </>
    )
}

export default Genre
