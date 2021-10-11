import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

export default function Dashboard () {
  return (
    <ProductList>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/kit-2-sapatenis-ollie-masculino-maldini-conforto/56/K26-0397-256/K26-0397-256_zoom2.jpg?ts=1633008980&ims=326x'
          alt='Tênis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart size={16} color='#fff' /> 3
          </div>

          <span>ADICIONAR AO CARRIHNO</span>
        </button>
      </li>
    </ProductList>
  )
}
