import Product from "./store"; 
console.log(Product)
const DetaildInfo =()=>{
    <>
    <h1>hwwww</h1>
    {Product.map((e) => {
        return(

        <div>
           
            <h1>{Product.title}</h1>
            <p>
                {Product.size}
            </p>
            <img src ={Product.imageUrl}></img>
            <p>
                {Product.price}
            </p>
        </div>
        )

     })}
    </>
}
export default DetaildInfo