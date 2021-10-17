import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'
import { connect } from 'react-redux'
import api from '../../services/api'
import { formatNumber } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux'

function Home ({ addToCart, amount }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData () {
      const response = await api.get('products')
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatNumber(product.price)
      }))
      setProducts(data)
    }
    fetchData()
  }, [])

  const handleAddProduct = product => {
    addToCart(product)
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button' onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color='#fff' />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRIHNO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
