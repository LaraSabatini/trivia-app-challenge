/* eslint-disable no-console */
import React, { useContext } from "react"
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
  const { connectToMetamask, isConnected, changeNetwork } = useContext(
    AppContext,
  )

  return (
    <Navigation>
      <LogoContainer>
        <ImageContainer>
          <img src={plainContent?.image} alt="Logo" />
        </ImageContainer>
        <Title>{plainContent?.title}</Title>
      </LogoContainer>
      {(isConnected.connectedToNetwork === undefined ||
        isConnected.connectedToNetwork) && (
        <Connect onClick={connectToMetamask}>
          <p>{!isConnected.connectedToNetwork ? "Connect" : "Connected"}</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
            alt="Metamask Logo"
          />
        </Connect>
      )}
      {isConnected.connectedToNetwork === false && (
        <Connect onClick={changeNetwork}>
          <p>Change network</p>
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
