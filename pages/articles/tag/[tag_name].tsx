import { useRouter } from 'next/router'
import { get } from '../../../util/common'
import { BASE_URL} from '../../../util/settings'
import { ArticleList } from '../../../util//sample-data'

export async function getServerSideProps(props: any) {
    // props.query = { tag_name: 'tagname' } でわたってくる
    const { tag_name } = props.query
    const url: string = BASE_URL + `/articles/tag/${tag_name}`
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
    const { tag_name } = router.query
    
    console.log(props)
    return (
        <>
        <div>
            <p>{tag_name}</p>
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
