import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt=""  />
                  <p>{item.name}</p>
                  <p>R${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>R${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-botton">
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
              <p>R${2.00}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Se você tem um codigo promocional. Insira aqui</p>
            <div className="cart-promocode-input">
              <input type="text"placeholder='Codigo Promocional'/>
              <button>Inserir</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
