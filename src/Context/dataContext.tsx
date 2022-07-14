import { createContext, ReactNode, useContext, useState, SetStateAction, Dispatch } from "react";


type contextprops = {
    setStyleProps: Dispatch<SetStateAction<StyleProp | null>>
    StyleProps: StyleProp | null

}
const StyleContext = createContext({} as contextprops);
type styleProps = {
    children: ReactNode
}
type StyleProp = {
    x: number | undefined,
    y: number | undefined,
    width: number | undefined,
    height: number | undefined

}

export const StyleContextProvider = ({children}: styleProps) => {
    const[StyleProps, setStyleProps]=useState<StyleProp | null>(null);
  return (
    <StyleContext.Provider value={{StyleProps, setStyleProps}}>
        {children}
    </StyleContext.Provider>
  )
}

export const useContextProvider = () => {
    useContext(StyleContext);
}
export default StyleContext;