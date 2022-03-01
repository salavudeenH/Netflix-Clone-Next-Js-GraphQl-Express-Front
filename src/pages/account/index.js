import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import styles from "./index.module.scss"
import Message from "../../component/Message/Message";

export default function Index() {
    const [user, SetUser] = useState({});
    const [success, SetSuccess] = useState(false);
    const [disabled, SetDisabled] = useState(true);
    const clickDisabled = () => {
        var dialog = confirm("Vous êtes sur de modifier les informations");
        if (dialog) {
            SetDisabled(!disabled)
        }
        else {
            return null
        }
        // confirm("Vous êtes sur de modifier l'adresse mail", )
    }
    const clickDisabledField = () => {
        SetDisabled(!disabled)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    authService
      .updateUser(token, user)
        .then((data) => {
            console.log(data);
            SetSuccess(true);
            SetUser(data.user);
            SetDisabled(!disabled)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        SetUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        // <p>{user.firstName}</p>
            <div className={styles.container}>
                    <h1>Compte</h1>
            <div className={styles.lines}></div>
            <div className={styles.Info__Container}>
            </div>
            <div className={styles.Info__Sub}>
            <div className={styles.Modifier}>
            <h2>Abonnement et Facturation</h2>
            <a><button onClick={clickDisabled}> Modifier les Informations </button></a>
            </div>
            <form className={styles.form__profil} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.Input__Container}>
            <input type="text" value={(user && user.firstName) || ""} onChange={(e) => {SetUser({ ...user, firstName: e.target.value })}}  disabled={disabled}></input>
            <input type="text" value={(user && user.lastName) || ""} onChange={(e) => {SetUser({ ...user, lastName: e.target.value })}} disabled={disabled}/>
            <input type="text" value={(user && user.email) || ""} onChange={(e) => {SetUser({ ...user, email: e.target.value })}}  disabled={disabled}></input>
            </div>
            <div className="flex">
            <button type="submit" className={disabled ? styles.none : styles.Buttons }>Enregistrer</button>
            <button className={disabled ?  styles.none : styles.Cancel__Button} onClick={clickDisabledField}>Annuler</button>
            </div>
            </form>
            {success ? (
                  <Message type="success" message="votre profil a bien été modifié"/>
              ) : ""
            }
            </div>
            </div>
          
    )
}
