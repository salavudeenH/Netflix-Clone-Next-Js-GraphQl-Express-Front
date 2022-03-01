import React, {useEffect} from 'react';
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
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
