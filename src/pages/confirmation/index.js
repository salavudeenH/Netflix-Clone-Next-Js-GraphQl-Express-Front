import React, {useEffect} from 'react';
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    //useEffect(() => {
    //     // console.log(router.query);
    // });
    return (
      
        <div>
           Merci d&apos;avoir Souscrit profiter des video 
           <button onClick={() => router.replace("/browse")}>Browse</button>
        </div>
    );
}

export default Index;
