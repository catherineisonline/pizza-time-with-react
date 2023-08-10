import React from 'react'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../../assets/images/cart-icon.png'
import SuccessMsg from '../../components/SuccessMsg'
import ResetLocation from '../../helpers/ResetLocation'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
    this.showHiddenMenu = this.showHiddenMenu.bind(this);
    this.removeMenu = this.removeMenu.bind(this);
  }

  showHiddenMenu() {

    this.setState({ showMenu: !this.state.showMenu });
  }
  removeMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    const {
      loginModal,
      productsQuantity,
      handleLogout,
      showModal,
      validLogin
    } = this.props;
    const {
      showHiddenMenu, removeMenu
    } = this;
    return (
      <header>
        {loginModal}
        <nav className="main-nav flex-container flex-row txt-center">
          <NavLink
            onClick={() => {
              ResetLocation()
              removeMenu()
            }}
            to="/"
            className="logo-styling flex-container flex-row txt-center txt-white"
          >
            <img
              width="50"
              height="50"
              className="logo"
              src={logo}
              alt="Pizza Time logo"
            />
            <p>
              Pizza <span>Time</span>
            </p>
          </NavLink>
          <ul className={`navigation-menu flex-row pop-font ${this.state.showMenu ? 'active' : ''}`}>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation()
                  removeMenu()
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: '#ff6240',
                    }
                    : {}
                }
                className="txt-white"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation()
                  removeMenu()
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: '#ff6240',
                    }
                    : {}
                }
                className="txt-white"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => {
                  ResetLocation()
                  removeMenu()
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: '#ff6240',
                    }
                    : {}
                }
                className="txt-white"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation()
                  removeMenu()
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: '#ff6240',
                    }
                    : {}
                }
                className="txt-white"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation()
                  removeMenu()
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: '#ff6240',
                    }
                    : {}
                }
                className="txt-white"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <div className="login-and-cart">
                {validLogin ? (
                  <Link
                    to="/"
                    className="passive-button-style txt-white"
                    onClick={() => {
                      ResetLocation()
                      handleLogout()
                    }}
                  >
                    Log out
                  </Link>
                ) : (
                  <div
                    className="passive-button-style txt-white"
                    onClick={() => {
                      ResetLocation()
                      showModal()
                    }}
                  >
                    Log in
                  </div>
                )}
                <NavLink
                  className="cart-btn active-button-style txt-white"
                  to="/cart"
                  onClick={() => {
                    ResetLocation()
                    removeMenu()
                  }}
                >
                  <img src={Cart} alt="" aria-hidden="true" />
                  <p>Cart</p>
                  <p>({productsQuantity})</p>
                </NavLink>
              </div>
            </li>
          </ul>
          <img
            width="50"
            height="50"
            className="burger-bars"
            src={this.state.showMenu ? closeMenu : openMenu}
            alt={this.state.showMenu ? "Close menu" : "Open menu"}
            onClick={showHiddenMenu}
          />
        </nav>
        <SuccessMsg />
      </header>
    )
  }
}
