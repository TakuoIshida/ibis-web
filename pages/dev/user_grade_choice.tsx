import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_user_grade_choice.module.scss'
import { useState } from 'react'
import Divider from '@material-ui/core/Divider'
// import PaymentForm from './PaymentForm'

// flier のサービスページ
// https://www.flierinc.com/doc/services

type gradeListType ={
    id: number,
    name: string,
    description: string,
    price: number
}

const UserGradeChoice = () => {
    const [selectedGrade, setSelectedGrade] = useState(1)
    // const [customer] = useState(location.state.customer)
    
    const gradeList: gradeListType[] = [
        {id: 1, name: "無料会員", description: "無料会員の説明", price: 0 },
        {id: 2, name: "シルバー会員", description: "シルバーの説明", price: 1000 },
        {id: 3, name: "有料会員", description: "ゴールド会員の説明", price: 2000 },
    ]
    // TODO: propsとして受けるもの、会員グレードタイトル、画像ID、料金、description、
    // gradeをセットし、色で視認させる。 → 有料の場合押せるようにし、購入ボタンを押してもらう
    const choiceUserGrade = (grade :number) => {
        // 選択されたカードのカラーを変える
        setSelectedGrade(grade)
    }
    const checkOut = (selectedGrade: number) => {
        // POST処理（grade, userInfo.[email, token], を取得し、バックエンドにPOSTする）
        alert(`you checked ${selectedGrade} out!`)
    }

    return (
    <>
    <div className={styles.service_intro}>
        <Typography gutterBottom variant="h5" component="h2" className={styles.service_intro_text}>
            サービスのご紹介
        </Typography>
    </div>
      {/* TODO: selectedGrade で色をつける */}
      {/* おすすめのバッジをつける */}
      {/* 無料会員 */}
      <div className={styles.display_flex}>
      {gradeList.map((grade, i) => {
            <div key={i} className={styles.row}>
              <Card className={styles.card}>
              <CardActionArea onClick={() => {choiceUserGrade(grade.id)}}>
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
      })}
      </div>
        {/* クレジットカード入力フォームを表示させる */}
            {/* { selectedGrade > 1? 
            <PaymentForm
            selectedGrade={selectedGrade}
            customer={customer}
          /> 
            : null
            } */}
    </>
    )
}


export default UserGradeChoice
