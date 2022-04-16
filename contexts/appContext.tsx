/* eslint-disable no-alert */
import { createContext, useState } from "react"
import web3 from "web3"

export const AppContext = createContext({
  isConnected: null,
  setIsConnected: null,
  connect: null,
  changeNetwork: null,
  checkIfIsAlreadyConnected: null,
  handleChainChanged: null,
  account: null,
  setAccount: null,
  balance: null,
  setBalance: null,
  isMobile: null,
  setIsMobile: null,
  modalView: null,
  setModalView: null,
})

function AppProvider({ children }) {
  // State to check if the user is on mobile or desktop
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [modalView, setModalView] = useState<boolean>(false)
  // State to see if the wallet is connected to the wallet and the right network
  const [isConnected, setIsConnected] = useState<{
    connectedToMetamastk: boolean
    connectedToNetwork: boolean
  }>({
    connectedToMetamastk: false,
    connectedToNetwork: undefined,
  })

  const networks = {
    Mainnet: "0x1",
    Ropsten: "0x3",
    Rinkeby: "0x4",
    Goerli: "0x5",
    Kovan: "0x2a",
  }

  const [account, setAccount] = useState<string[]>([])
  const [balance, setBalance] = useState<number>()

  // To detect which network is connected to the network
  const handleChainChanged = (
    _chainId: string,
    isConnectedToMetamask: boolean,
  ) => {
    const connection =
      _chainId === networks.Ropsten
        ? setIsConnected({
            connectedToMetamastk: isConnectedToMetamask,
            connectedToNetwork: true,
          })
        : setIsConnected({
            connectedToMetamastk: isConnectedToMetamask,
            connectedToNetwork: false,
          })
    return connection
  }

  // To connect wallet
  const connect = async () => {
    const { ethereum } = window as any
    // Get the chain id
    const chainId = await ethereum.request({ method: "eth_chainId" })

    if (typeof window !== undefined && ethereum) {
      // window.ethereum.enable()
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
          setIsConnected({
            connectedToMetamastk: true,
            connectedToNetwork: isConnected.connectedToNetwork,
          })
          handleChainChanged(chainId, true)
          setAccount(accounts)
        })
    } else {
      alert("Please install metamask extension to continue")
    }
  }

  // To change network
  const changeNetwork = async () => {
    const { ethereum } = window as any
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: web3.utils.toHex(networks.Ropsten) }],
    })
    const chainId = await ethereum.request({ method: "eth_chainId" })
    handleChainChanged(chainId, true)
  }

  // To check if is already connected to the network
  const checkIfIsAlreadyConnected = async () => {
    if (typeof window !== undefined) {
      const { ethereum } = window as any
      // Check if is connected to metamask
      const connectedToMetamastk = await ethereum.request({
        method: "eth_accounts",
      })
      setAccount(connectedToMetamastk)

      const chainId = await ethereum.request({ method: "eth_chainId" })

      if (connectedToMetamastk.length > 0) {
        handleChainChanged(chainId, true)
      } else {
        handleChainChanged(chainId, false)
      }
    }
  }

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isConnected,
        setIsConnected,
        connect,
        changeNetwork,
        checkIfIsAlreadyConnected,
        handleChainChanged,
        account,
        setAccount,
        balance,
        setBalance,
        isMobile,
        setIsMobile,
        modalView,
        setModalView,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
