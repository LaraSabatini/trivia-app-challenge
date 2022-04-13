import React, { useEffect, useContext } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import { SurveyContext } from "contexts/surveyContext"
import { AppContext } from "contexts/appContext"
import NavBar from "components/NavBar"
import QuestionContainer from "components/QuestionContainer"
import getPlainContent from "services/getPlainContent.service"
import {StartButton, Modal, Title, Description} from "./styles"
import { CloseOutlined } from "@ant-design/icons"

function MainContainer() {
  const { setPlainContent } = useContext(PlainContentContext)
  const { isConnected, setIsMobile, modalView, setModalView } = useContext(AppContext)
  const { setSurveyView, surveyView } = useContext(SurveyContext)

  const renderingStart = () => {
    const content = getPlainContent()
    setPlainContent(content)
    setSurveyView(false)
  }

  useEffect(() => {
    renderingStart()
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setIsMobile(true)
      console.log("mobile")
      setModalView(true)
    }else{
      setIsMobile(false)
      console.log("desktop")
      setModalView(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startSurvey = () => {
    if (isConnected.connectedToMetamastk && isConnected.connectedToNetwork) {
      setSurveyView(true)
    }
  }

  return (
    <>
      {modalView && <Modal>
        <Title>Notice
          <button onClick={() => setModalView(false)} type="button"><CloseOutlined /></button>
        </Title>
        <Description>
          To use this app from a mobile device, please install the Metamask App and use it's browser. For more information 
          <a href="https://consensys.net/blog/metamask/how-to-use-the-browser-buy-eth-and-send-transactions-on-metamask-mobile/"> click here</a>
        </Description>
        </Modal>}
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