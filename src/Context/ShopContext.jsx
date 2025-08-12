import { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let card = {}
  for(let i = 0; i < all_product.length + 1; i++){
    card[i] = 0
  }
  return card
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  
  const addToCart = (id) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
    console.log(cartItems);
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
  }
  
  const contextValue = {all_product, cartItems, addToCart, removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider