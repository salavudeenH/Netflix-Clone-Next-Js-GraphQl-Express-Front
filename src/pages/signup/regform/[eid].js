import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { UseRouter } from "next/router";
import authService from "../../../services/auth.service";

export default function Index() {
    const router = UseRouter();
    const {eid} = router.query
    const [user, SetUser] = useState({email:eid});
    const [error, SetError] = useState(false);
    const [errorMessage, SetErrorMessage] = useState("");
    const [token, SetToken] = useState("");
    const handleSubmit = (e) => {
      console.log(user)
        e.preventDefault();
        authService.register(user)
        .then((data) => {
          console.log(data);
          if (data.message) {
            SetError(true);
            SetErrorMessage(data.message);
            return false;
          }
          localStorage.setItem("token", data.token);
          router.push("/signup/presentation");
        })
        .catch((err) => {
          console.log(err);
          SetError(true);
          SetErrorMessage(err.message)
        });
      };
      useEffect(() => {
        const token = localStorage.getItem("token");
        SetToken(token)
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
            <input className="mb-2" type="text" required={true} placeholder="Votre Nom" onChange={(e) => {SetUser({ ...user, firstName: e.target.value })}}/>
            <input className="mb-2" type="text" required={true} placeholder="Votre Prenom" onChange={(e) => {SetUser({ ...user, lastName: e.target.value })}} />
            <input type="email" defaultValue={eid} required={true} placeholder="Votre Adresse Mail" onChange={(e) => {SetUser({...user, email: e.target.value })}} />
            <input className="mt-4" type="password" required={true} placeholder="Votre Mot de passe" onChange={(e) => {SetUser({ ...user, password: e.target.value })}} />
            <button type="submit">Suivant</button>
            {error}
            {errorMessage}
        </div>
        </form>
        </div>
        </div>
    )
}

