import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

type carouselProp = {
  card: {
      id: number,
      title: string,
      content: string,
      imageId: number,
  }
}

const AbstCard = (props: carouselProp) =>  {
  
  return (
    <Card className="width">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="card1"
          height="140"
          width="140"
          // publicをrootとしてpathを書く
          image={`/img/${props.card.imageId}.jpg`}
          title="card1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.card.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default AbstCard