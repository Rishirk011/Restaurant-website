import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export interface foodITemTypes{
    name:string;
    price:number;
    id:number;
    quantity:number;
    img:string;
}
interface cartType{
    items:foodITemTypes[];
    add:(item:foodITemTypes)=>void;
    remove:(item:foodITemTypes)=>void;
    inc:(item:foodITemTypes)=>void;
    dec:(item:foodITemTypes)=>void;
}
export const useStore=create<cartType>()(persist((set)=>{
    return{
        items:[],
        
        add:(item)=>set((state)=>{
            
            const exist=state.items.find((product)=>
            product.id===item.id)

            if(exist){
                return {...state,items:state.items.map((product)=>product.id===item.id?{...product,quantity:product.quantity+1}:product)}
            }

            return {
                items:[...state.items,item]
            }
            
        }),
        
        remove:(item)=>set((state)=>({
            items:state.items.filter((product)=>product.id!==item.id)
        })),

        inc:(item)=>set((state)=>({
            items:state.items.map((product)=>product.id===item.id?{...product,quantity:product.quantity+1}:product)
        })),

        dec:(item)=>set((state)=>({
            items:state.items.map((product)=>product.id===item.id?{...product,quantity:product.quantity-1}:product).filter((product)=>product.quantity>0)
        }))

    }
},{
    name:"items",
    storage:createJSONStorage(()=>localStorage)
}))