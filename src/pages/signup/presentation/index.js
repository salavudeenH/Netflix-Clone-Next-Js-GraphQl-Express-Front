import React,{useEffect,useState} from 'react'
import styles from './index.module.scss'
import withAuth from "../../../HOC/withAuth";
import authService from "../../../services/auth.service";
import Link from "next/link";

const Index = () => {
    const [user, SetUser] = useState({});
    useEffect(() => { const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        SetUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div>
            <div className={styles.container}>
            <div>
             <span className={styles.image}></span> 
             </div>
            <h3>ÉTAPE <span>2 </span>SUR <span>3</span></h3>
            <h1>Choisissez votre <br/>forfait.</h1>
            </div>
            <div className={styles.secondContainer}>
            <ul>
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Sans engagement. Annulable à tout moment.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Tous les programmes Netflix pour un abonnement très attractif.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Accès illimité sur tous vos appareils.</span>
           </li> 
            </ul>
            <Link href="/signup/planform">
            <button className={styles.button}>Suivant</button>
            </Link>
            </div>
            </div>    
    )
}

export default withAuth(Index);
