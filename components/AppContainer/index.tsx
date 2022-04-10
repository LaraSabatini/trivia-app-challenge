import React, { useEffect, useContext } from 'react'
import { PlainContentContext } from "contexts/plainContentContext"
import NavBar from "components/NavBar"
import getPlainContent from "services/getPlainContent.service"

const MainContainer = () => {
  const {setPlainContent} = useContext(PlainContentContext)

  const renderingStart = async () => {
    const content = await getPlainContent()
    setPlainContent(content)
  }
useEffect(() =>{
    renderingStart()
}, [])

  return (
   <NavBar/>
  )
}

export default MainContainer
