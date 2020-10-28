import { User } from 'firebase'
import { FC, createContext, useEffect, useState } from 'react'

import { firebase } from '../../src/firebase'

type AuthContextProps = {
  currentUser: User | null | undefined
}

export const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

export const AuthProvider: FC = ({ children }) => {
  // undefined: API コールの結果が返る前
  // User：API コールの結果、ログインだった場合 User オブジェクトが返る
  // null：API コールの結果、未ログインの場合 null が返る
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
