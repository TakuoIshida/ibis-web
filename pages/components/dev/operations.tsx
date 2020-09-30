// 非同期処理を制御するようなActionのコードは、全てoperationに任せます。

// export const fetchUsersList = () => {
//     return async (dispatch: any) => {
//         let usersList: UsersList = [];
//         return db.collection('users').get()
//             .then(snapshot => {
//                 for (let i = 0 ; i < snapshot.size; i = (i + 1) | 0) {
//                     const doc = snapshot.docs[i];
//                     const data = doc.data();
//                     usersList.push({
//                         icon: data.icon
//                         uid: doc.id,
//                         username: data.username,
//                     })
//                 }
//                 dispatch(fetchUsersListAction(usersList))
//             })
//     }
// }
