import type { NextPage } from "next"
import PlainContentProvider from "contexts/plainContentContext"
import AppProvider from "contexts/appContext"
import MainContainer from "components/AppContainer"

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <AppProvider>
      <PlainContentProvider>
        <MainContainer />
      </PlainContentProvider>
    </AppProvider>
  )
}

export default Home
