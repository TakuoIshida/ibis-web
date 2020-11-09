import { useRouter } from 'next/router'
import { get } from '../../util/common'
import { BASE_URL, API_ROUTE} from '../../util/settings'


export async function getServerSideProps(props: any) {
    // props.query = { article_id: '1' } でわたってくる
    const { article_id } = props.query
    const url: string = BASE_URL + API_ROUTE.getArticle + `/${article_id}`
    // const url: string = BASE_URL + API_ROUTE.getArticle + `/1`
    const data = await get(url)

    return {
        props: data
    }
}
const article = (data: any) => {
    const router = useRouter()
    const { article_id } = router.query
    
    console.log(data)
    return (
        <>
        <div>
            <p>{article_id}</p>
        </div>
        <div>
            <p>{data.Journal}</p>
            <p>{data.Abstract}</p>
            <p>{data.Genre}</p>
            <p>{data.OriginalURL}</p>
        </div>
        </>
    )
}

export default article
