export interface foodItemListType{
    id:number;
    name:string;
    price:number;
    img:string;
    quantity:number;
}

export const foodItemList:foodItemListType[]=[
    
    {id:1,name:"Mc veggie",price:225,img:"/public/food/one.jpeg",quantity:1},
    
    {id:2,name:"Fish Burger",price:250,img:"/public/food/12.jpeg",quantity:1},
    
    {id:3,name:"Kebab Burger",price:200,img:"/public/food/six.jpeg",quantity:1},
    
    {id:4,name:"Whooper",price:150,img:"/public/food/one.jpeg",quantity:1},

    {id:5,name:"Mcaalo tikki",price:30,img:"/public/food/nine.jpeg",quantity:1},

    {id:6,name:"Juicy lucy",price:200,img:"/public/food/12.jpeg",quantity:1},

]