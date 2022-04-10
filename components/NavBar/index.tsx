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
  const { setIsConnected } = useContext(AppContext)

  const connectToWallet = () => {
    console.log("connecting")
    setIsConnected(true)
  }

  return (
    <Navigation>
      <LogoContainer>
        <ImageContainer>
          <img src={plainContent?.image} alt="Logo" />
        </ImageContainer>
        <Title>{plainContent?.title}</Title>
      </LogoContainer>
      <Connect onClick={connectToWallet}>
        <p>Connect</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
          alt="Connect"
        />
      </Connect>
    </Navigation>
  )
}

export default NavBar
