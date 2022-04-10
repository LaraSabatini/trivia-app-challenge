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
  const { setIsConnected, isConnected } = useContext(AppContext)

  const connectToWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: any) => {
          // Chequear que el usuario este conectado a ropsten, sino no dejarlo avanzar
          // Si no esta conectado a ropsten mostrar un boton para que cambie a esa red

          // Mostrar el balance del token $QUIZ
          console.log("respuesta conexion", res)
          setIsConnected(true)
        })
    } else {
      // eslint-disable-next-line no-alert
      alert("Please install metamask extension to continue")
    }
    // setIsConnected(!isConnected)
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
        <p>{!isConnected && "Connect"}</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
          alt="Connect"
        />
      </Connect>
    </Navigation>
  )
}

export default NavBar
