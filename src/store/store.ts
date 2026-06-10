import { stat } from "fs";
import { Form } from "react-router-dom";
import { start } from "repl";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export interface foodITemTypes{
    name:string;
    price:number;
    id:number;
    quantity:number;
    img:string;
}
interface User{
    id:string;
    email:string;
}
interface cartType{
    items:foodITemTypes[];
    add:(item:foodITemTypes)=>void;
    remove:(item:foodITemTypes)=>void;
    inc:(item:foodITemTypes)=>void;
    dec:(item:foodITemTypes)=>void;
    clearItems:()=>void;
    user:null|User;
    isLoggedIn:boolean;
    HandleLogin:(email:string,password:string)=>void;
    HandleLogout:()=>void;
}

export const useStore=create<cartType>()(persist((set)=>{
    return{
        items:[],
        user:null,
        isLoggedIn:false,
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
        })),
        clearItems:()=>set({items:[]}),
        HandleLogin:(email:string)=>set(()=>({
            user:{id:"1",email},
            isLoggedIn:true
        })),
        HandleLogout:()=>set(()=>({
            user:null,
            isLoggedIn:false,
            items:[]
        }))

    }
},{
    name:"items",
    storage:createJSONStorage(()=>localStorage)
}))

