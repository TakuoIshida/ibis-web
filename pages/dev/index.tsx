import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import MenuIcon from "@material-ui/icons/Menu";
import SaveIcon from "@material-ui/icons/Save";
import Link from "next/link";
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../public/styles/_dev.module.scss";
import ClipBoard from "../../re-ducks/commons/components/ClipBoard";
import { reducksCountDown, reducksCountUp } from "../../re-ducks/dev/Actions";
import Alert from "../../re-ducks/dev/components/DevAlert";
import Checkbox from "../../re-ducks/dev/components/DevCheckbox";
import ClickEvent from "../../re-ducks/dev/components/DevClickEvent";
import Loading from "../../re-ducks/dev/components/DevLoading";
import Table from "../../re-ducks/dev/components/DevTable";
import { getReducksCounter } from "../../re-ducks/dev/Selectors";
import { Login } from "../../util/auth/Login";
// import { BASE_URL, API_ROUTE } from "../../util/settings"
import Logout from "../../util/auth/Logout";

export async function getServerSideProps() {
  // const url: string = BASE_URL + API_ROUTE.dev
  // const json = await get(url)
  // const stars: number = await json.stars

  // propsで値が返される→props.starsで取得できる
  return {
    props: {
      dev: {
        textbox: "propsのtextbox",
      },
    },
  };
}

const initialState = {
  BadDispatchCount: 0,
};

// キーは文字列、そのほかは入った型を定義する → types.tsxへ定義
type initialState<T> = {
  [key: string]: T;
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "increment":
      return { BadDispatchCount: state.BadDispatchCount + 1 };
    case "decrement":
      return { BadDispatchCount: state.BadDispatchCount - 1 };
    default:
      throw new Error();
  }
};

const BadDispatchCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increseNumber = () => {
    dispatch({ type: "increment" });
  };

  const decreaseNumber = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      BadDispatchCount: {state.BadDispatchCount}
      <button onClick={() => increseNumber()}>+</button>
      <button onClick={() => decreaseNumber()}>-</button>
    </>
  );
};

// 単一のコンポネント（共通コンポネントには最適）
const HooksCounter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  const countDown = () => setCount(count - 1);

  return (
    <>
      HooksCount: {count}
      <button onClick={() => countUp()}>countUp </button>
      <button onClick={() => countDown()}>countDown </button>
    </>
  );
};

const Dev = (props: any) => {
  const selector = useSelector((state) => state);
  const reducksCount = getReducksCounter(selector);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(reducksCountUp(reducksCount));
  const handleDecrement = () => dispatch(reducksCountDown(reducksCount));
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
        <Link href="/mypage" as="/mypage">
          <a>mypage</a>
        </Link>
      </Button>

      <div className={styles.container}>
        <p>Propsのテスト：{props.dev.textbox}</p>
        <p>
          <BadDispatchCounter />
        </p>
        <p>
          <HooksCounter />
        </p>
        <p>
          reducksCount: {reducksCount}
          <button onClick={() => handleIncrement()}>reducksCountUp</button>
          <button onClick={() => handleDecrement()}>reducksCountDown</button>
        </p>
      </div>

      <Divider className="margin_top" variant="inset" />
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={styles.menu_button}
              color="inherit"
              aria-label="menu"
            >
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
      <Divider variant="inset" />
      <ClipBoard reference="This text is copied when clip is clicked." />
      <Divider />
      <Table />
      <Divider />
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
};

export default Dev;

// reduxよりも、React Hooksで各コンポネント内の責任でstateを保持したい

// 理由：reduxの思想としては、stateを一元管理するため、全画面で値を取得でき、画面遷移にも強い点はある一方で
// 大規模になるほど、使用するstateが増えるため、stateの把握、認識自体が大変になるし、テストも大変になる。
