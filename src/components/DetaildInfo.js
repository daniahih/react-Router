import Store from "./store";
import {  useParams } from "react-router-dom";
console.log(Store);
const DetaildInfo = () => {
    const params = useParams()
    const result = Store.filter((e)=> {
        return e.id === parseInt(params.id)})
    // console.log("result",result);
    return <>
    <h1>{result[0].title}</h1>
    <p>
        {result[0].size}
    </p>
    <img src={result[0].imageUrl}></img>
    <p>
        {result[0].price}
    </p>
    </>
    
}
export default DetaildInfo;
