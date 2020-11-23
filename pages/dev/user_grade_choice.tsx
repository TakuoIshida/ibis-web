
// flier のサービスページ
// https://www.flierinc.com/doc/services

// このページの動作概要
// 商品を選択 → クレジットカードのコンポネントを表示 → 入力 → POST

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_user_grade_choice.module.scss'
import PaymentForm from './PaymentForm.js'
import { useState } from 'react'
type grade = {
    id: number,
    name: string,
    imageId: number,
    price: string,
    description: string,
}
const UserGradeChoice = () => {
    // TODO: propsとして受けるもの、会員グレードタイトル、画像ID、料金、description、
    const gradeList: grade[] = [
        { id: 1, name: '無料会員', imageId: 1, price: 'Free', description: 'サービス説明1'},
        { id: 2, name: 'シルバー会員', imageId: 2, price: '1000', description: 'サービス説明2'},
        { id: 3, name: 'ゴールド会員', imageId: 3, price: '2000', description: 'サービス説明3'},
    ]
    const [selectedProductId, setSelectedProductId] = useState(Number())
    // const [customer] = useState(location.state.customer)

    const choiceUserGrade = (id :number) => {
        setSelectedProductId(id)
        // UserInfo,userGradeを取得し、モーダルを表示する。
    }
    return (
    <>
    <div className={styles.service_intro}>
        <Typography gutterBottom variant="h5" component="h2" className={styles.service_intro_text}>
            サービスのご紹介
        </Typography>
    </div>
    <div className={styles.display_flex}>

        {gradeList.map((grade, idx) => {
            return(
            <div className={styles.row}>
                {/* 無料会員は選択されない */}
                {
                    idx == 0 ? 
                    (
                    <Card key={idx} className={styles.card}>
                        <CardMedia
                        component="img"
                        className={styles.height}
                        // publicをrootとしてpathを書く
                        image={`/img/${grade.imageId}.jpg`}
                        title={grade.name}
                        alt={grade.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {grade.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {grade.description}
                        </Typography>
                        <Divider />
                        <Typography variant="h6" gutterBottom className={styles.plan}>
                            {grade.price}円/月（税抜）
                        </Typography>
                        </CardContent>
                    </Card>
                    )
                  :
                  (
                    <Card key={idx} className={styles.card}>
                    <CardActionArea onClick={() => choiceUserGrade(grade.id)}>
                        <CardMedia
                        component="img"
                        className={styles.height}
                        // publicをrootとしてpathを書く
                        image={`/img/${grade.imageId}.jpg`}
                        title={grade.name}
                        alt={grade.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {grade.name}
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
                    </Card>
                  )
                    
                }
            </div>
            )
        })}
    </div>
        {selectedProductId > 1 ? (
            <PaymentForm
            productSelected={gradeList[selectedProductId - 1]}
            // TODO: customer の取得→customer.idが必要
            // customer={customer}
            />
          ) : null}
    </>
    )
}

export default UserGradeChoice
