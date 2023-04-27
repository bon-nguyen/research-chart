
import Home from './home'

const Page = () => {
  return <Home />
}

Page.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}

export default Page