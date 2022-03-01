import React from 'react'
import styles from './index.module.scss'
import { UseRouter } from "next/router";

export default function Index() {
    const router = UseRouter();
    const {eid} = router.query;
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: `/signup/regform/${eid}`,
          })
        }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.image}>
                </div>
            </div>
           <div className={styles.step}>
            <h3>ÉTAPE <span>1 </span>SUR <span>3</span></h3>
            <h1>Complétez la configuration de votre compte.</h1>
            <div>
            <p>Netflix est personnalisé selon vos goûts. Créez un mot de passe pour regarder Netflix quand vous voulez, où vous voulez.</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.submitBtnContainer}>
            <button type="submit" className={styles.button}>Suivant</button>
            </div>
            </form>
           </div>
        </div>
    )
}
