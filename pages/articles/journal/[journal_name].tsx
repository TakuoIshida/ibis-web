import { useRouter } from 'next/router'
import { get } from '../../../util/common'
import { BASE_URL, API_ROUTE} from '../../../util/settings'
import { ArticleList } from '../../../util//sample-data'

export async function getServerSideProps(props: any) {
    // props.query = { journal_name: 'journalname' } でわたってくる
    const { journal_name } = props.query
    // TODO: API_ROUTE削除
    const url: string = BASE_URL + API_ROUTE.getArticlesByJournal
    const data: ArticleList = await get(url)
    return {
        props: {data}
    }
}
type propsType = {
    data: ArticleList
}
const Journalname = (props: propsType) => {
    const router = useRouter()
    const { journal_name } = router.query
    
    console.log(props)
    return (
        <>
        <div>
            <p>{journal_name}</p>
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

export default Journalname
