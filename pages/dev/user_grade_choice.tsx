// import PaymentForm from './PaymentForm'

// flier のサービスページ
// https://www.flierinc.com/doc/services


import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_user_grade_choice.module.scss'

const UserGradeChoice = () => {
    // TODO: propsとして受けるもの、会員グレードタイトル、画像ID、料金、description、
    const gradeList = [
        { id: 1, title: '無料会員', imageId: 1, price: 'Free', description: 'サービス説明1'},
        { id: 2, title: 'シルバー会員', imageId: 2, price: '1000', description: 'サービス説明2'},
        { id: 3, title: 'ゴールド会員', imageId: 3, price: '2000', description: 'サービス説明3'},
    ]
    const choiceUserGrade = (id :number) => {
        // UserInfo,userGradeを取得し、モーダルを表示する。
        alert(id)
    }
    // モーダルでＯＫがでれば、POSTする

    // モーダルでのOK 
    const areYouSure = () => {
        // 
    }
    return (
    <>
    <div className={styles.service_intro}>
        <Typography gutterBottom variant="h5" component="h2" className={styles.service_intro_text}>
            サービスのご紹介
        </Typography>
    </div>
    <div className={styles.display_flex}>

        {gradeList.map((grade, i) => {
            return(
            <div className={styles.row}>
                <Card key={i} className={styles.card}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    className={styles.height}
                    // publicをrootとしてpathを書く
                    image={`/img/${grade.imageId}.jpg`}
                    title={grade.title}
                    alt={grade.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {grade.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {grade.description}
                    </Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom className={styles.plan}>
                        {grade.price}円/月（税抜）
                    </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="large" color="primary" value={grade.id} onClick={() => {choiceUserGrade(grade.id)}}>
                        購入する
                    </Button>
                </CardActions> */}
                </Card>
            </div>
            )
        })}
    </div>
    </>
    )
}

export default UserGradeChoice
