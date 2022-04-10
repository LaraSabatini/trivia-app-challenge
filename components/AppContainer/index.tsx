import React, { useEffect, useContext } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import NavBar from "components/NavBar"
import getPlainContent from "services/getPlainContent.service"

function MainContainer() {
  const { setPlainContent } = useContext(PlainContentContext)

  const renderingStart = async () => {
    const content = await getPlainContent()
    setPlainContent(content)
  }

  useEffect(() => {
    renderingStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <NavBar />
}

export default MainContainer
