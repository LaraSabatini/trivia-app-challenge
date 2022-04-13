import type { NextPage } from "next"
import PlainContentProvider from "contexts/plainContentContext"
import SurveyProvider from "contexts/surveyContext"
import AppProvider from "contexts/appContext"
import MainContainer from "components/AppContainer"

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <SurveyProvider>
      <PlainContentProvider>
        <AppProvider>
          <MainContainer />
        </AppProvider>
      </PlainContentProvider>
    </SurveyProvider>
  )
}

export default Home
