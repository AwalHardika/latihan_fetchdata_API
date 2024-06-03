import { useState } from "react"
import { NavLink} from "react-router-dom"

export default function Navbar (){
const [aktifMenu, setAktifMenu] = useState("dashboard")
function handleAktifMenu(status){
        setAktifMenu(status)

}

console.log(aktifMenu)

    return (
    <div className="w-[200px] min-h-screen flex flex-col bg-white">
        <div className="w-full h-[100px] flex justify-center items-center bg-gradient-to-tr from-purple-600 to-purple-100 ">
            <h1>LOGO</h1>
        </div>
        <nav className="flex flex-col w-full ">
        <NavLink
          to={"/"}
          className={`${
            aktifMenu==="dashboard" ? "text-purple-500 bg-slate-50" : null
          } w-full h-12 flex items-center font-light px-3 shadow-md hover:shadow-lg `} onClick={()=>handleAktifMenu("dashboard")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to={"/users"} 
          className={`${
            aktifMenu==="users" ? "text-purple-500 bg-slate-50" : null
          } w-full h-12 flex items-center font-light px-3 shadow-md hover:shadow-lg `} onClick={()=>handleAktifMenu("users")}
        >
          Users
        </NavLink>



        </nav>


    </div>


    )
}