import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { UseRouter } from "next/router";
import authService from "../../../services/auth.service";

export default function index() {
    const router = UseRouter();
    const {eid} = router.query
    const [user, setUser] = useState({email:eid});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useState("");
    const handleSubmit = (e) => {
      console.log(user)
        e.preventDefault();
        authService.register(user)
        .then((data) => {
          console.log(data);
          if (data.message) {
            setError(true);
            setErrorMessage(data.message);
            return false;
          }
          localStorage.setItem("token", data.token);
          router.push("/signup/presentation");
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setErrorMessage(err.message)
        });
      };
      useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token)
      })
      // if(token){
      //   return <div>Access denied</div>
      // }
    return (
        <div>
            <div className={styles.First__Container}>
           <h3>ÉTAPE <span>1 </span>SUR <span>3</span></h3>
           <h1>Créez un mot de passe pour activer votre abonnement</h1>
           <p>Plus que quelques étapes et c'est fini !</p>
           <p>Plus rien à remplir.</p>
           <form onSubmit={(e) => handleSubmit(e)}>
           <div className={styles.Second__Container}>
            <input className="mb-2" type="text" required={true} placeholder="Votre Nom" onChange={(e) => {setUser({ ...user, firstName: e.target.value })}}/>
            <input className="mb-2" type="text" required={true} placeholder="Votre Prenom" onChange={(e) => {setUser({ ...user, lastName: e.target.value })}} />
            <input type="email" defaultValue={eid} required={true} placeholder="Votre Adresse Mail" onChange={(e) => {setUser({...user, email: e.target.value })}} />
            <input className="mt-4" type="password" required={true} placeholder="Votre Mot de passe" onChange={(e) => {setUser({ ...user, password: e.target.value })}} />
            <button type="submit">Suivant</button>
            {error}
            {errorMessage}
        </div>
        </form>
        </div>
        </div>
    )
}

