import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informações para Entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nome' />
          <input type="text" placeholder='Sobrenome' />
        </div>
        <input type="email" placeholder='Endereço de Email' />
        <input type="text" placeholder='Rua' />
        <div className="multi-fields">
          <input type="text" placeholder='Cidade' />
          <input type="text" placeholder='Estado' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='CEP' />
          <input type="text" placeholder='País' />
        </div>

        <input type="text" placeholder='Telefone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Carrinho de Compras</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Taxa da Entrega:</p>
              <p>R${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} >Finalizar Compra</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
