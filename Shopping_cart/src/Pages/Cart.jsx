import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducer'
import Popup from 'reactjs-popup';



const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-8">
                    {cart.map(p => (
                        <CartProduct product={p}></CartProduct>
                    ))}
                </div>
                <div className="col-4 ">
                    <div className="bg-secondary p-3 text-white">
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: ${totalPrice(cart) * 80 / 100} </h5>
                        <Popup trigger={<button className='btn btn-warning'> Checkout</button>} position="right center">
                            <div className="box-4">
                                <div>
                                    <h5>Thank you for shopping with us</h5>
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart