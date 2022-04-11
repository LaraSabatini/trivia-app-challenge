/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, useState } from "react"
import web3 from "web3"

export const AppContext = createContext({
  pageState: null,
  setPageState: null,
  isConnected: null,
  setIsConnected: null,
  connectToMetamask: null,
  changeNetwork: null,
})

function AppProvider({ children }) {
  // State to control the page view
  const [pageState, setPageState] = useState<string>("")
  // State to see if the wallet is connected to the wallet and the right network
  const [isConnected, setIsConnected] = useState<{
    connectedToMetamastk: boolean
    connectedToNetwork: boolean
  }>({
    connectedToMetamastk: false,
    connectedToNetwork: undefined,
  })

  // const { ethereum } = window
  const network = "0x3"

  // Function to connect wallet
  const connectToMetamask = async () => {
    const { ethereum } = window
    // To detect network
    const chainId = await ethereum.request({ method: "eth_chainId" })
    handleChainChanged(chainId)
    ethereum.on("chainChanged", handleChainChanged)

    function handleChainChanged(_chainId: any) {
      const connection =
        _chainId === network
          ? setIsConnected({
              connectedToMetamastk: true,
              connectedToNetwork: true,
            })
          : setIsConnected({
              connectedToMetamastk: true,
              connectedToNetwork: false,
            })
      console.log("Red conectada a Network?", connection)
    }
    // To connect with metamask
    if (typeof window !== undefined) {
      if (ethereum) {
        ethereum.request({ method: "eth_requestAccounts" }).then(() => {
          setIsConnected({
            connectedToMetamastk: true,
            connectedToNetwork: isConnected.connectedToMetamastk,
          })
        })
      } else {
        // eslint-disable-next-line no-alert
        alert("Please install metamask extension to continue")
      }
    }
  }

  // Function to change network
  const changeNetwork = async () => {
    const { ethereum } = window
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: web3.utils.toHex(network) }],
    })
  }

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        pageState,
        setPageState,
        isConnected,
        setIsConnected,
        connectToMetamask,
        changeNetwork,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
