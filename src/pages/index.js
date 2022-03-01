import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import React,{useState} from 'react'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, SetEmail] = useState('');
  const [error,SetError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (!email) {
     SetError("L'e-mail est obligatoire !")
      return false;
    }
    else{
    router.push({
      pathname: `/signup/${email}`,
      // query: { email: email },
    })
    }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix regarder comme vous êtes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Martel+Sans&family=Orbitron:wght@500;600&display=swap" rel="stylesheet"/>
      </Head>

      <main>
       <div className="first__Card">
       <div className="main">
       <div className="flex pt-6 pl-12 justify-between">
         <Link href="/">
        <div className="logo">
         <svg viewBox="0 0 111 30" fill="#e50914" className="svg-icon svg-icon-netflix-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
        </div>
        </Link>
        <div className="pr-12">
        <Link href="/login">
          <button className="auth__button">S&apos;identifier</button>
        </Link>
        </div>
       </div>
       <div className="text-center mt-24">
        <h1 className="card__text">Films, séries TV et bien <br></br> plus en illimité.</h1>
        <p className="subtitle">Où que vous soyez. Annulez à tout moment.</p>
        <p className="subtitle sub2 pt-6">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre <br></br> abonnement.</p>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-center mt-10">
        <input type="email" onChange={e => SetEmail(e.target.value)} className="email__input pl-4" placeholder=" Adresse Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
        <button type="submit" className="start__button flex justify-center items-center"> Commencer <span className=""><svg width="20" height="20" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="white" fillRule="evenodd"></path></svg></span>
        </button>
        </div>
        <div className="Error__Message">{error}</div>
        </form>
       </div>
       </div>
       </div>
      </main>
      <footer >
      </footer>
    </div>
  )
}
