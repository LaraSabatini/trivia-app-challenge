/* eslint-disable no-console */
import React, { useContext, useEffect } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import { AppContext } from "contexts/appContext"
import {
  Navigation,
  Title,
  ImageContainer,
  LogoContainer,
  Connect,
} from "./styles"

function NavBar() {
  const { plainContent } = useContext(PlainContentContext)
  const {
    connect,
    isConnected,
    changeNetwork,
    checkIfIsAlreadyConnected,
  } = useContext(AppContext)

  useEffect(() => {
    checkIfIsAlreadyConnected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Navigation>
      <LogoContainer>
        <ImageContainer>
          <img src={plainContent?.image} alt="Logo" />
        </ImageContainer>
        <Title>{plainContent?.title}</Title>
      </LogoContainer>
      {isConnected.connectedToMetamastk ? (
        <Connect onClick={changeNetwork}>
          <p>
            {isConnected.connectedToNetwork ? "Connected" : "Change Network"}
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
            alt="Metamask Logo"
          />
        </Connect>
      ) : (
        <Connect onClick={connect}>
          <p>Connect</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
            alt="Metamask Logo"
          />
        </Connect>
      )}
    </Navigation>
  )
}

export default NavBar
