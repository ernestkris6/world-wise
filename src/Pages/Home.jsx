import { Link } from "react-router-dom"
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";



export default function Home() {
  return (
 
    <div>
       <PageNav />
       <AppNav />
       <h1 className="test">WorldWise</h1>

       <Link to="/app">Go to the app</Link>

    </div>
    
  )
}
