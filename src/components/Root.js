import { Outlet } from "react-router-dom"
import MainNevigation from "./MainNevigation"

const RootLayout=()=>{
return (
    <>
    <MainNevigation/>
    <Outlet/>
    </>
)
}
export default RootLayout