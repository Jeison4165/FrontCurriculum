import '../styles/SideMenu.scss'
import { FiMenu, FiX } from 'react-icons/fi'
import { useContext } from 'react'
import { ButtonSideContext } from '../context/ButtonSideContext'

export const MobileNavToggle = () => {
    const {visible, setVisible} = useContext(ButtonSideContext)

    const showCanvas = () => {
        setVisible((prev) => (!prev))
        document.body.classList.toggle('mobile-nav-active')
    }

    return (
        <i className="mobile-nav-toggle d-xl-none" onClick={showCanvas}>
            {visible ? <FiMenu/>: <FiX/>}
        </i>
    )
}
