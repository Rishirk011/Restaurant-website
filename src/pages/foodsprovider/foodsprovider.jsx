import { useState, createContext, useContext } from "react";
export const expItems = createContext([]);
import { expItems } from "../foods/foods";

export default function FoodsProvider({ children }) {
  const {cart} =useContext(expItems);
  
  function handleCart(items) {
        setCart((item)=>{
        const isIteminCart=item.find((item)=>item.id===items.id)
        
        if(isIteminCart){
            return item.map((food)=>food.id===items.id?{...food,quantity:food.quantity+1}:food)
        }
        return [...item,{...items,quantity:1}]
    }
    )
    
    }
  
  return (
    <expItems.Provider value={{ cart, handleCart }}>
      {children}
    </expItems.Provider>
  );
}