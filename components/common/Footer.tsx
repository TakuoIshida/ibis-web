import Link from 'next/link'
import Typography from '@material-ui/core/Typography'

type footerContents = { title: string, url: string }[]

const Footer = () => {
    // service, news, terms
    const footerContents: footerContents = [
        { title: "サービス", url: "/" },
        { title: "お知らせ", url: "/" },
        { title: "規約", url: "/" },
    ]

    return (
        <>
            <div>
                <img height="60px" src="/ibis.svg" />
            </div>
            {footerContents.map((content, i) =>
                <Link key={i} href={`${content.url}`}><a>{content.title}</a></Link>
            )}
            <Typography>All Rights Reserved 2020</Typography>
        </>
    )
}

export default Footer
