import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import React,{useEffect,useState} from 'react';
import { getMovie } from "../../graphql/queries/movie";
import { getFilterMovie } from "../../graphql/queries/movie";
import { useQuery } from "@apollo/react-hooks";
import 'swiper/css/navigation';
import authService from "../../services/auth.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AmourCategorie from "../../component/AmourCategorie/Slider"
import ComedieCategorie from "../../component/ComedieCategorie/Slider"
import DocCategorie from "../../component/DocCategorie/Slider"
import Link from "next/link";
import { AiOutlineSearch,AiTwotoneBell } from 'react-icons/ai';
import suscribe from "../../HOC/withAuth"
import { useRouter } from "next/router";

const Index = () => {
    const [user, SetUser] = useState({});
    const router = useRouter();
    const { loading, error, data } = useQuery(getMovie);
    useEffect(() => {
        document.body.style.backgroundColor = "black";
        const token = localStorage.getItem("token");
        authService
          .getUser(token)
          .then((data) => {
            SetUser(data);
            if (data.isSuscribe === false) {
                router.push("/signup/planform");
              }
            console.log("------>", data);
          })
          .catch((err) => console.log(err));
    },[])
   
    if (loading) {
        return null;
    }

    if (error) {
        console.log(error);
        return null;
    }
    
    return (
        <div className={styles.Main}>
            <div className={styles.Slide__Title}>
                <h1>Populaire Sur Netflix </h1>
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
                    {data.getMovie.map((movie) => (
                        <SwiperSlide className={styles.Slider__Card} key={movie.id}>
                             <Link href={`/browse/${movie.id}`}>
                            <img className={styles.Card} src={`${movie.link}`}  title="Smiley face"/>
                            </Link>
                        </SwiperSlide>
                    ))}
                      
                </Swiper>
                <div>
                     <AmourCategorie></AmourCategorie>
                    </div>
                    <div>
                     <ComedieCategorie></ComedieCategorie>
                    </div>   
                    <div>
                     <DocCategorie></DocCategorie>
                    </div>          
            </div>
        </div>
    )
}


export default suscribe(Index);