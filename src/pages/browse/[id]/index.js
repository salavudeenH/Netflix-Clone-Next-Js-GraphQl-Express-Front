import React,{useEffect} from 'react';
import { getMovieId } from "../../../graphql/queries/movie";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import styles from "./index.module.scss"
export default function index() {
    const router = useRouter();
    useEffect(() => {
        document.body.style.backgroundColor = "black";
    })
    const { loading, error, data } = useQuery(getMovieId,{
        variables: {
          id: router.query.id,
        },
      });

    if (loading) {
        return null;
    }

    if (error) {
        console.log(error);
        return null;
    }

    return (
    <div>   
    <iframe width="100%" height="500"
    src={data.getMovieId.video}>
    </iframe>
    <div className={styles.Title}>
    <h1>{data.getMovieId.title}</h1>
    </div>
    <div className={styles.container}>
    <div>
    <p className={styles.rating}>Recommandé à : {data.getMovieId.rating}</p>
    <p> 2021</p>
    <span>{data.getMovieId.age} +</span>
    <span>HD</span>
    <button><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg></div></button>
    </div>
    <div className={styles.Movie__Details}>
        <div><h3>Réalisateur : </h3> <p className={styles.info}>{data.getMovieId.director}</p></div>
        <div><h3>Distubution : </h3> <p className={styles.info}>{data.getMovieId.distributor}</p></div>
        <div><h3>Genres : </h3> <p className={styles.info}>{data.getMovieId.categorie[0].title}</p></div>
        <div><h3>Durée : </h3> <p className={styles.info}>{data.getMovieId.duration}</p></div>
        <div><h3>Sortie le : </h3> <p className={styles.info}>{data.getMovieId.releaseDate}</p></div>
    </div>
    </div>
  
    <div className={styles.Description}>
        <h3>Description : </h3>
        <p>{data.getMovieId.description}</p>
    </div>
    
        </div>
    )
}
