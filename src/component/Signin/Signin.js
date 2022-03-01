import React from 'react'
import styles from './Signin.module.scss'
import Input from '../Input/Input'
import Link from 'next/link'
import Message from "../../component/Message/Message";

const Connexion = (props) => {
    return (
        <div>
             <div className={styles.main}>
                <div className={styles.Container}>
                <h1> S'identifier</h1>
                <form onSubmit={props.onSubmit}>
                    <div className="pt-6">
                   <Input placeholder={props.placeholderEmail} onChange={props.onChangeEmail} label="email" id="email" required={props.requiredEmail} value={props.valueEmail} type={props.typeEmail}></Input>
                   </div>
                   <div className="pt-6">
                   <Input placeholder={props.placeholderPassword} onChange={props.onChangePassword}  required={props.requiredPassword} value={props.valuePassword} type={props.typePassword}></Input>
                   </div>
                   <div className="pt-6">
                   <button type="submit">S'identifier</button>
                   {props.error && <Message type="error" message={props.message}/>}
                   </div>
                </form>
                <div className={styles.first_connexion}>
                <span>Première visite sur Netflix ? </span>
                <Link href="/">
                <a>Inscrivez-vous</a>
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion;