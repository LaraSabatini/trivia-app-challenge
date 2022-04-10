/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, useState } from "react"

export const AppContext = createContext({
  pageState: null,
  setPageState: null,
  isConnected: null,
  setIsConnected: null,
  connectToMetamask: null,
  connectedToRopsten: null,
  setConnectedToRopsten: null,
})

function AppProvider({ children }) {
  // State to control the page view
  const [pageState, setPageState] = useState<string>("")
  // State to see if the wallet is connected or not to the wallet
  const [isConnected, setIsConnected] = useState<boolean>(false)
  // State to see if the wallet is connected to the right network
  const [connectedToRopsten, setConnectedToRopsten] = useState<boolean>(false)

  const connectToMetamask = async () => {
    const { ethereum } = window

    const chainId = await ethereum.request({ method: "eth_chainId" })
    handleChainChanged(chainId)
    ethereum.on("chainChanged", handleChainChanged)

    function handleChainChanged(_chainId: any) {
      // DETECCION DE LA RED => TIENE QUE SER 0x3 la ropsten
      // Hacer condicional de una sola linea
      // eslint-disable-next-line no-console
      console.log("Red conectada", _chainId)
      if (_chainId === "0x3") {
        setConnectedToRopsten(true)
      } else {
        setConnectedToRopsten(false)
        // Mostrar boton para cambiar de red
      }
    }

    if (typeof window !== undefined) {
      if (ethereum) {
        ethereum.request({ method: "eth_requestAccounts" }).then((res: any) => {
          // eslint-disable-next-line no-console
          console.log("respuesta conexion", res)
          setIsConnected(true)
        })
      } else {
        // eslint-disable-next-line no-alert
        alert("Please install metamask extension to continue")
      }
    }
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
        connectedToRopsten,
        setConnectedToRopsten,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
