import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'
import api from '../../services/api'
import { formatNumber } from '../../util/format'

export default function Dashboard () {
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

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button'>
            <div>
              <MdAddShoppingCart size={16} color='#fff' /> 3
            </div>

            <span>ADICIONAR AO CARRIHNO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
