import { get } from '../util/common'

type confirmType = {
    value: number,
    detail: string
}

export async function getStaticProps() {
    const api_url: string = 'https://covid19.mathdro.id/api'
    const json = await get(api_url)
    const confirmed: confirmType = await json.confirmed
    return { 
        props: { confirmed } 
    }
}

const ssg = (props: any) => {
    return (
        <div>
            <p>props</p>
    <p>{props.confirmed.value}</p>
    <p>{props.confirmed.detail}</p>
        </div>
    )
}

export default ssg
