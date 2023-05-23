import { createContext, useContext, useState } from 'react'

export const ButtonSideContext = createContext()

export const ButtonSideProvider = (props) => {
    const [visible, setVisible] = useState(true)

    return (
        <ButtonSideContext.Provider value={{visible, setVisible}}>
            {props.children}
        </ButtonSideContext.Provider>
    )
}
