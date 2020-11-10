import { useRouter } from 'next/router'
import { get } from '../../../util/common'
import { BASE_URL, API_ROUTE} from '../../../util/settings'
import { ArticlesArticleId } from '../../../util//sample-data'

export async function getServerSideProps(props: any) {
    // props.query = { article_id: '1' } でわたってくる
    const { article_id } = props.query
    const url: string = BASE_URL + API_ROUTE.getArticle + `/${article_id}`
    const data = await get(url)

    return {
        props: {
            data
        }
    }
}
type propsType = {
    data: ArticlesArticleId
}
const article = (props: propsType) => {
    const router = useRouter()
    const { article_id } = router.query
    
    console.log(props)
    return (
        <>
        <div>
            <p>{article_id}</p>
        </div>
        <div>
            <p>{props.data.Journal}</p>
            <p>{props.data.Abstract}</p>
            <p>{props.data.Genre}</p>
            <p>{props.data.OriginalURL}</p>
        </div>
        </>
    )
}

export default article