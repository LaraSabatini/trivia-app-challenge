import { createContext, useState } from "react"

export const AppContext = createContext({
  pageState: null,
  setPageState: null,
  isConnected: null,
  setIsConnected: null,
})

function AppProvider({ children }) {
  // State to control the page view
  const [pageState, setPageState] = useState<string>("")
  // State to see if the wallet is connected or not to the wallet
  const [isConnected, setIsConnected] = useState<boolean>(false)

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        pageState,
        setPageState,
        isConnected,
        setIsConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
