import React,{useState, useEffect} from 'react'
import { getMovieId } from "../../graphql/queries/movie";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";

import styles from "./index.module.scss"


export default function Index() {
    return (
        <div className="text-center pt-4">
            <h1 className="font-semibold text-3xl">Ajout Film :</h1>
            <div className="flex flex-col items-center">
            <input type="text" placeholder="Nom du film" className={styles.input}></input>
            <input type="text" placeholder="description du film" className={styles.input}></input>
            <input type="text" placeholder="Realisateur du film" className={styles.input}></input>
            <input type="text" placeholder="lien de l'image" className={styles.input}></input>
            <input type="text" placeholder="Genre du film" className={styles.input}></input>
            <input type="text" placeholder="Lien de la video" className={styles.input}></input>
            <input type="text" placeholder="recommentation" className={styles.input}></input>
            <input type="number" placeholder="age" className={styles.input}></input>
            <input type="text" placeholder="Distributeur" className={styles.input}></input>
            <input type="text" placeholder="Date de sortie" className={styles.input}></input>
            </div>
        </div>
    )
}
