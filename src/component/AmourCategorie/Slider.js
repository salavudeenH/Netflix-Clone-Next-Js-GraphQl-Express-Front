import React from 'react'
import { getFilterMovie } from "../../graphql/queries/movie";
import { useQuery } from "@apollo/react-hooks";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from "next/link";

export default function Index(props) {
      const { loading, error, data } = useQuery(getFilterMovie, {
        variables: {
          categorie: "621ce551e1179ec2d2b758cb"
        },
      });

    if (loading) {
        return "loading ...";
    }

    if (error) {
        console.log(error);
        return null;
    }
    
    console.log(data.getFilterMovie + "sala");
    return (

      <>
          {/* <h1>Bonjour</h1>
          {/* {loading ? <h1>loading</h1> : <p>hello</p> } */}
          {/* <div>  {data.filterCategory.map((movie) => ( <p>{movie.title}</p> ))}</div> */} 
          <div className={styles.Slide__Title}>

                <h1>Amour</h1>
            </div>
            <div className={styles.Slide}>
                <Swiper
                    className={styles.Sliders__Card}
                    modules={[Navigation]}
                    spaceBetween={3}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                >
                    {data.filterCategory.map((movie) => (
                        
                        <SwiperSlide className={styles.Slider__Card}>
                             <Link href={`/browse/${movie.id}`}>
                            <img className={styles.Card} src={`${movie.link}`}  title="Smiley face"/>
                            </Link>
                        </SwiperSlide>
                        
                    ))}
                </Swiper>      
            </div>
                </>
    )
}
