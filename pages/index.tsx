import type { NextPage } from 'next'
import PlainContentProvider from "contexts/plainContentContext"
import MainContainer from "components/AppContainer"

const Home: NextPage = () => {
  return (
    <PlainContentProvider>
      <MainContainer/>
    </PlainContentProvider>
  )
}

export default Home
