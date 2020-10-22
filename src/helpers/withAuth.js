import React from "react";
import router from "next/router";
import { auth } from "../firebase";


// TODO:export default withAuth(コンポーネント名)で
// 「サインインした画面でないと見れない」という機能を追加する
const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //  TODO:定数・型宣言化
        status: "LOADING"
      };
    }
    componentDidMount() {
        // サインインが成功した場合、「authUser」インスタンスの中には、
        // ユーザー情報（id, email）が入ることになる
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: "SIGNED_IN"
          });
        } else {
          router.push("/");
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <>{this.renderContent()}</>;
    }
  };
};
export default withAuth;