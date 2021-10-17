import React from 'react'
import logo from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import { Container, Cart } from './styles'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header ({ cartZise }) {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Rocketshoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartZise} itens</span>
        </div>
        <MdShoppingBasket size={36} color='#ffffff' />
      </Cart>
    </Container>
  )
}

export default connect(state => ({
  cartZise: state.cart.length
}))(Header)
