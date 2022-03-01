import React,{useState} from 'react'
import styles from './index.module.scss'
import withAuth from "../../../HOC/withAuth";

const Index = () => {
    const [plan, SetPlan] = useState(null);
    const subscribeToPlan = async () => {
        console.log(plan);
        const reqBody =
          plan == 0
            ? { id: 0, name: "Essential", quantity: 1 }
            : plan == 1
            ? { id: 1, name: "Standard", quantity: 1 }
            : { id: 2, name: "Premium", quantity: 1 };
        const response = await fetch(
          `http://localhost:3131/api/v1/users/payments?plan=${plan}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              items: [reqBody],
            }),
          }
        );
        const data = await response.json();
        const { url } = data;
        window.location.href = url;
      };


    return (
        <div className={styles.First__Container}>
            <div className={styles.Second__Container}>
            <h3>ÉTAPE <span>2 </span>SUR <span>3</span></h3>
            <h1>Regardez autant que vous voulez. Sans publicité.</h1>
            </div>
            <div className={styles.Third__Container}>
            <ul>
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Recommandations personnalisées.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Changez ou annulez votre forfait à tout moment.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Accès illimité sur tous vos appareils.</span>
           </li> 
            </ul>
            </div>
            <div className={styles.plan__Container}>
                <div className={styles.planGrid__header}>
                   <label>
                       <input type="radio" name="plan" value="0" onChange={(e) => SetPlan(e.target.value)}/>
                       <span className={styles.plan}>Essentiel</span>
                   </label>
                   <label>
                       <input type="radio" value="1" name="plan" onChange={(e) => SetPlan(e.target.value)} />
                       <span className={styles.plan}>Standard</span>
                   </label>
                   <label>
                       <input type="radio" name="plan" value="2" onChange={(e) => SetPlan(e.target.value)} />
                       <span className={styles.plan}>Premium</span>
                   </label>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
            <div className={styles.Table}>
               <table>
                   <tbody>
                       <tr>
                           <td className={styles.First__Child}>Abonnement mensuel</td>
                           <td className={styles.Second__Child}>30,00 €</td>
                           <td className={styles.Second__Child}>60,00 €</td>
                           <td className={styles.Second__Child}>100,00 €</td>
                       </tr>
                       <tr>
                           <td className={styles.First__Child}>Qualité vidéo</td>
                           <td className={styles.Second__Child}>Bonne</td>
                           <td className={styles.Second__Child}>Meilleure</td>
                           <td className={styles.Second__Child}>Optimale</td>
                       </tr>
                       <tr className={styles.Last__Explain}>
                           <td className={styles.First__Child}>Résolution</td>
                           <td className={styles.Second__Child}>480p</td>
                           <td className={styles.Second__Child}>1080p</td>
                           <td className={styles.Second__Child}>4K+HDR</td>
                       </tr>
                   </tbody>
               </table>
            </div>
            <div className={styles.ButtonContainer}>
            <button onClick={subscribeToPlan}>Suivant</button>
            </div>
        </div>
    )
}

export default withAuth(Index);
