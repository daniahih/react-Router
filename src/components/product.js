import Product from "./store";
import { Link } from "react-router-dom";
console.log('product',Product)
const ProductPage =()=>{
    return(

        <>
        <h1>Product Page </h1>
    {Product.map((e) => {
   return <li><Link to='/DetaildInfo'>{e.title}</Link></li>      
})}
        </>
    )
}
 export default ProductPage