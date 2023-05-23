import { FiMenu, FiX } from 'react-icons/fi'
import '../styles/SideMenu.scss'
import { useContext, useState } from 'react'
import { ButtonSideContext } from '../context/ButtonSideContext'

export const MobileNavToggle = () => {
    const {visible, setVisible} = useContext(ButtonSideContext)

    const showCanvas = () => {
        setVisible((prev) => (!prev))
        document.body.classList.toggle('mobile-nav-active')
    }

    return (
        <i class="mobile-nav-toggle d-xl-none" onClick={showCanvas}>
            {visible ? <FiMenu/>: <FiX/>}
        </i>
    )
}
