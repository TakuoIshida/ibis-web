import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()
  const { result } = router.query

  return (
  <>
    <p>ユーザーID: {result}</p>
  </>
  )
}

export default index
