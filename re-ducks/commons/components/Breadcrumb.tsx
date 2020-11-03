import { Paper, Breadcrumbs, Typography } from '@material-ui/core'
import { withRouter } from 'next/router'
import { routingMapping } from '../../../util/const'
import Link from 'next/link'

const PageBreadcrumbs = (props: any) => {
    const pathname: string[] = props.router.pathname
      .split('/')
      .filter((element: string[]) => element.length > 0)
    let len: number = pathname.length
  
    let links: JSX.Element[] = []
    let pathnameHierarchy: string = '/'
    for (let i = 0; i < len; i ++) {
      let target = routingMapping[pathnameHierarchy]
      if(target) {
        links.push(
            <Link href={pathnameHierarchy} key={pathnameHierarchy} >
              {target.title}
            </Link>
        )
      }
      pathnameHierarchy += pathnameHierarchy.endsWith('/') ? pathname[i] : `/${pathname[i]}`
    }

    const deepest = routingMapping[pathnameHierarchy] // 最下層=現在のルーティングはクリックできないように<Typography>でリストを作成
    if(deepest) {
      links.push(
          <Typography color="textPrimary" key={pathnameHierarchy}>
            {deepest.title}
          </Typography>
      )
    }
    return (
      <Paper elevation={3} >
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          {links.map(link => (link))}
        </Breadcrumbs>
      </Paper>
    )
  }
  
  export default withRouter(PageBreadcrumbs)