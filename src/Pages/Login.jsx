import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../Components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES

  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  
  const {login, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault()

    if(email && password) login(email, password)

  }



  useEffect(function(){
    if(isAuthenticated) navigate('/app', {replace: true})
  }, [isAuthenticated, navigate])


  return (
    <main className={styles.login} onSubmit={handleSubmit}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="**********"
          />
        </div>

        <div>
          <button className={styles.btn}>LOG IN</button>
        </div>
      </form>
    </main>
  );
}