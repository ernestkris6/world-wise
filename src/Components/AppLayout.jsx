import styles from "./AppLayout.module.css"
import Map from "./Map"
import SideBar from "./SideBar";
import User from "../Components/User";


export default function AppLayout() {
  return (
    <div className={styles.app}>
      
     <SideBar />
     <Map />
     <User />
    
    </div>
  )
}


/*

Challenge: Create advanced state mgt system with useReducer and the Context API;


You have been tasked by your project mgr to refactor this app using the context api

Your Tasks:

Duplicate src folder to src-no-contexts
Review data flow and passed props
Identify props drilling problem
Use the context api to fix the very small prop drilling problem
Create a new context quiz context with the reducer we created earlier
Create a custom provider component quiz provider and provide all the state to the app
Create a custom hook to consume state all over the application
Delete all unnecessary props
IMPORTANT: Note how you actually need state right in app component. This means you need to
wrap the whole app into the context. (Hint: try in index.js) 


**/

