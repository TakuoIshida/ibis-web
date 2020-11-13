import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_user_grade_choice.module.scss'
import { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Divider from '@material-ui/core/Divider'

// flier のサービスページ
// https://www.flierinc.com/doc/services
const UserGradeChoice = () => {
    const [selectedGrade, setSelectedGrade] = useState(1)
    const [isButtonDisable, setIsButtonDisable] = useState(true)
    // TODO: propsとして受けるもの、会員グレードタイトル、画像ID、料金、description、
    // gradeをセットし、色で視認させる。 → 有料の場合押せるようにし、購入ボタンを押してもらう
    const choiceUserGrade = (grade :number) => {
        setSelectedGrade(grade)
        // 無料会員→ボタンをdisableにする
        // 有料会員→ボタンをアクティブにする
        switch (grade) {
            case 1:
                setIsButtonDisable(true)
                break
            case 2:
                setIsButtonDisable(false)
                break
            case 3:
                setIsButtonDisable(false)
                // バッジを充てる
                break
        }
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
            <div className={styles.row}>
                <Card className={styles.width}>
                <CardActionArea onClick={() => {choiceUserGrade(1)}}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        無料会員
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        説明１
                    </Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom className={styles.plan}>
                        0円/月（税抜）
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
      {/* シルバー会員 */}
            <div className={styles.row}>
                <Card className={styles.width}>
                <CardActionArea onClick={() => {choiceUserGrade(2)}}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        シルバー会員
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        説明2
                    </Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom className={styles.plan}>
                        1000円/月（税抜）
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
      {/* ゴールド会員 */}
            <div className={styles.row}>
                <Card className={styles.card}>
                <CardActionArea onClick={() => {choiceUserGrade(3)}}>
                <CardHeader title="\ オススメ /" className={styles.card_header} />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ゴールド会員
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3説明3
                    </Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom className={styles.plan}>
                        2000円/月（税抜）
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
      </div>
            <div className={styles.div_button}>
                <Button  disabled={isButtonDisable} onClick={() => checkOut(selectedGrade)} variant="contained" color="secondary">
                    <ShoppingCartIcon />購入する
                </Button>
            </div>
            </>
            )
}

export default UserGradeChoice
