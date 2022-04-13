import React, { useContext, useEffect } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import getBalance from "services/getBalance.service"
import token from "tokens/QUIZ.json"
import { AppContext } from "contexts/appContext"
import {
  Navigation,
  Title,
  ImageContainer,
  LogoContainer,
  Connect,
  Balance,
  Container,
} from "./styles"

function NavBar() {
  const { plainContent } = useContext(PlainContentContext)
  const {
    connect,
    isConnected,
    changeNetwork,
    checkIfIsAlreadyConnected,
    handleChainChanged,
    setIsConnected,
    setAccount,
    account,
    setBalance,
    balance,
  } = useContext(AppContext)

  const prueba = async () => {
    const res = await getBalance(token.address, account[0])
    setBalance(res.result)
  }

  useEffect(() => {
    if (account.length > 0) {
      prueba()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  useEffect(() => {
    checkIfIsAlreadyConnected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Detect changes on network and account
  useEffect(() => {
    if (typeof window !== undefined && window.ethereum) {
      window.ethereum.on("chainChanged", async (chainId: string) => {
        if (account.length === 0) {
          checkIfIsAlreadyConnected()
        } else {
          handleChainChanged(chainId, true)
        }
      })
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts)
        if (accounts.length === 0) {
          setIsConnected({
            connectedToMetamastk: false,
            connectedToNetwork: isConnected.connectedToNetwork,
          })
        } else {
          setIsConnected({
            connectedToMetamastk: true,
            connectedToNetwork: isConnected.connectedToNetwork,
          })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
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
      {balance !== undefined && <Balance>Balance: {balance}</Balance>}
    </Container>
  )
}

export default NavBar
