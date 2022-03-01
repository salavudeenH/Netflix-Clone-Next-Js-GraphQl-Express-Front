import React, {useEffect} from 'react';
import { UseRouter } from "next/router";

const Index = () => {
    const router = UseRouter();
    useEffect(() => {
        console.log(router.query);
    });
    return (
      
        <div>
           Merci d'avoir Souscrit profiter des video
            {/* {router.query.userID} */}
        </div>
    );
}

export default Index;
