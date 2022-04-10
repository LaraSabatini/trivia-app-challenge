import React, { useEffect, useContext } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import { AppContext } from "contexts/appContext"
import NavBar from "components/NavBar"
import getPlainContent from "services/getPlainContent.service"
import StartButton from "./styles"

function MainContainer() {
  const { setPlainContent } = useContext(PlainContentContext)
  const { isConnected } = useContext(AppContext)

  const renderingStart = async () => {
    const content = await getPlainContent()
    setPlainContent(content)
  }

  useEffect(() => {
    renderingStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NavBar />
      <StartButton active={isConnected}>
        {isConnected ? "Start survey" : "Connect to start survey"}
      </StartButton>
    </>
  )
}

export default MainContainer
