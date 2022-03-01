import React, {useEffect} from 'react';
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const Index = () => {
    const router = useRouter();
    //useEffect(() => {
    //     // console.log(router.query);
    // });
    return (
      
        <div className="text-center mt-32">
           <h2>Merci d&apos;avoir Souscrit profiter des video</h2>
           <button className={styles.button} onClick={() => router.replace("/browse")}>Aventure Netflix</button>
        </div>
    );
}

export default Index;
