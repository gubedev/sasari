import React from "react"

const LayoutContext = React.createContext()

export function LayoutContextProvider({ children }) {
  const [isShowingSidebar, setIsShowingSidebar] = React.useState(false)

  return <LayoutContext.Provider 
            value={{ 
                isShowingSidebar, 
                setIsShowingSidebar
             }}
          >
            {children}
          </LayoutContext.Provider>
}

export default LayoutContext