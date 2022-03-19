import React from 'react'
import { slide as Menu } from 'react-burger-menu'


var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '20px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      left:'0px'
    },
    bmMenu: {
      background: '#161616',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      textDecoration:'none',
      color:'white',
      marginTop:'1rem'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    buttonM:{
      cursor:'pointer'
    }
  }

function BurguerMenu(){     
    return (
        <Menu styles={styles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Acerca</a>
        <a id="contact" className="menu-item" href="/contact">Contacto</a>
        <a id="account" className="menu-item--small" href="">Mi cuenta</a>      
        </Menu>
    )

}

export {BurguerMenu}