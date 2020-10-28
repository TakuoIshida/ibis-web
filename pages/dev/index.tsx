import Link from 'next/link'
import {FC, useState, useEffect, useReducer } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'
import Table from '../../components/common/Table'
import Card from '../../components/common/Card'
import Alert from '../../components/common/Alert'
import Checkbox from '../../components/common/Checkbox'
import ClickEvent from '../../components/common/ClickEvent'

import styles from '../../public/static/styles/_dev.module.scss'
import { BASE_URL, API_ROUTE } from "../../constants/settings"
import { getFetch, postFetch } from '../../util/common'
import Logout from '../../components/auth/Logout'
import { Login } from '../../components/auth/Login'
import Loading from '../../components/common/Loading'

export async function getServerSideProps() {
  const url: string = BASE_URL + API_ROUTE.dev
  const json = await getFetch(url)
  const stars: number = await json.stars

  // propsで値が返される→props.starsで取得できる
  return {
    props: {
      stars: stars,
      dev: {
        textbox: 'propsの値',
      }
   }
  }
}


const initialState = {
  BadDispatchCount: 0
}

// キーは文字列、そのほかは入った型を定義する → types.tsxへ定義
type initialState<T> = {
  [key: string]: T
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'increment':
      return {BadDispatchCount: state.BadDispatchCount + 1};
    case 'decrement':
      return {BadDispatchCount: state.BadDispatchCount - 1};
    default:
      throw new Error();
  }
}

const BadDispatchCounter = () =>  {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increseNumber = () => {
    dispatch({type: 'increment'})
  }

  const decreaseNumber = () => {
    dispatch({type: 'decrement'})
  }
  return (
    <>
      BadDispatchCount: {state.BadDispatchCount}
      <button onClick={() => increseNumber()}>+</button>
      <button onClick={() => decreaseNumber()}>-</button>
    </>
  );
}

// 単一のコンポネント（共通コンポネントには最適）
const HooksCounter = () => {
  const [count, setCount] = useState(0)
  const countUp = () => setCount(count + 1)
  const countDown = () => setCount(count - 1)

  return (
    <>
    HooksCount: {count}
    <button onClick={() => countUp()}>countUp </button>
    <button onClick={() => countDown()}>countDown </button>
    </>
  )
}

import { getReducksCounter } from '../../components/dev/Selectors'
import { useDispatch, useSelector } from 'react-redux'
import { reducksCountUp, reducksCountDown } from '../../components/dev/Actions'
import {sampleData} from '../../util/sample-data'

const Dev: FC<sampleData> = ({ dev, stars }) => {
  const selector = useSelector(state => state)
  const reducksCount = getReducksCounter(selector)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(reducksCountUp(reducksCount))
  const handleDecrement = () => dispatch(reducksCountDown(reducksCount))
  return (
    <div id={styles.dev}>
      <div>
        <Link href="/">
          <a className={styles.link}>Back to Top</a>
        </Link>
      </div>
      <div>
        <Link href="//material-ui.com/components/box/">
          <a className={styles.link}>Go to Material-UI</a>
        </Link>
      </div>
      <Login />
      <Logout />
      <Button variant="contained">
        <Link href="/mypage" as ="/mypage">
            <a>mypage</a>
        </Link>
      </Button>

      <div className={styles.container}>
        <p>
          Propsで受け取った初期値：{dev.textbox}
        </p>
        <p>
        fetchAPIで取得したstars：{stars}
        </p>
        <p>
        <BadDispatchCounter />
        </p>
        <p>
        <HooksCounter />
        </p>
        <p>
          reducksCount: { reducksCount }
          <button onClick={() => handleIncrement()} >reducksCountUp</button>
          <button onClick={() => handleDecrement()} >reducksCountDown</button>
        </p>
      </div>


      <Divider className="margin_top" />
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={styles.menu_button} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              News
          </Typography>
            <Button color="inherit">ボタン</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Button
          variant="contained"
          color="secondary"
          className="button"
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          variant="contained"
          color="primary"
          className="button"
          endIcon={<Icon>send</Icon>}
        >
          Send
      </Button>
        <Button
          variant="contained"
          color="default"
          className="button"
          startIcon={<CloudUploadIcon />}
        >
          Upload
      </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          className="button"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className="button"
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="button"
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
      </div>
      <Divider />
      <Table />
      <Divider />
      <Card />
      <Divider />
      <Alert />
      <Divider />
      <ClickEvent />
      <Divider />
      <Checkbox />
      <Divider />
      <Loading />
    </div>
  );
}

export default Dev

// reduxよりも、React Hooksで各コンポネント内の責任でstateを保持したい

// 理由：reduxの思想としては、stateを一元管理するため、全画面で値を取得でき、画面遷移にも強い点はある一方で
// 大規模になるほど、使用するstateが増えるため、stateの把握、認識自体が大変になるし、テストも大変になる。
