// 参考：flier のサービスページ
// https://www.flierinc.com/doc/services

// 有料会員登録ページ
// 商品を選択 → クレジットカードのコンポネントを表示 → 入力 → POST
import { useState } from 'react'
import PaymentForm from './PaymentForm.js'
import { gradeList } from '../../util/const'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_user_grade_choice.module.scss'

const UserGradeChoice = () => {
    const [selectedGradeId, setSelectedProductId] = useState(1)
    // const [customer] = useState(location.state.customer)

    const choiceUserGrade = (id :number) => {
        setSelectedProductId(id)
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
                    <div>
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
                    </div>
                    )
                  :
                  (
                    //   選択されたサービスの枠を囲う
                    <div className={(idx == selectedGradeId-1)? styles.selected: ""}>
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
                    </div>
                  )
                }
            </div>
            )
        })}
    </div>
    
        {/* 有料会員であれば、クレジットフォームを表示 */}
        {selectedGradeId > 1 ? (
            <PaymentForm
            productSelected={gradeList[selectedGradeId - 1]}
            />
          ) : null}
    </>
    )
}

export default UserGradeChoice
