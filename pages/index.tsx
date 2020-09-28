import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import TopPage from './TopPage'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root"),
// );
const index: React.FC = () => {
  return (
      <TopPage />
  )
}

export default index
