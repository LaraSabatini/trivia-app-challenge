import React, { useEffect, useContext } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import { SurveyContext } from "contexts/surveyContext"
import { AppContext } from "contexts/appContext"
import NavBar from "components/NavBar"
import QuestionContainer from "components/QuestionContainer"
import getPlainContent from "services/getPlainContent.service"
import StartButton from "./styles"

function MainContainer() {
  const { setPlainContent } = useContext(PlainContentContext)
  const { isConnected } = useContext(AppContext)
  const { setSurveyView, surveyView } = useContext(SurveyContext)

  const renderingStart = () => {
    const content = getPlainContent()
    setPlainContent(content)
    setSurveyView(false)
  }

  useEffect(() => {
    renderingStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startSurvey = () => {
    if (isConnected.connectedToMetamastk && isConnected.connectedToNetwork) {
      setSurveyView(true)
    }
  }

  return (
    <>
      <NavBar />
      {surveyView ? (
        <QuestionContainer />
      ) : (
        <StartButton
          active={
            isConnected.connectedToMetamastk && isConnected.connectedToNetwork
          }
          onClick={startSurvey}
        >
          {isConnected.connectedToMetamastk && isConnected.connectedToNetwork
            ? "Start survey"
            : "Connect to start survey"}
        </StartButton>
      )}
    </>
  )
}

export default MainContainer
