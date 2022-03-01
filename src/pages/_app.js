import '../../styles/globals.css'
import { useRouter } from 'next/router';
import SignupLayout from '../component/signupHeader/index'
import Navbar from '../component/NavBar/Navbar'
import MainLayout from '../component/layout/index'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";
import Head from "next/head";
function MyApp({ Component, pageProps}) {
  const { asPath } = useRouter();
  
  return (

  asPath == "/signup" ? <SignupLayout> <Component {...pageProps} /></SignupLayout> : 
  asPath == "/signup/regform" ? <SignupLayout> <Component {...pageProps} /></SignupLayout> :
  asPath == "/signup/presentation" ? <SignupLayout> <Component {...pageProps} /></SignupLayout> :
  asPath == "/signup/planform" ? <SignupLayout> <Component {...pageProps} /></SignupLayout> :
  asPath == "/confirmation" ? <SignupLayout> <Component {...pageProps} /></SignupLayout> :
  asPath == "/login" ? <MainLayout> <Component {...pageProps} /></MainLayout> :
  asPath == "/" ? <MainLayout> <Component {...pageProps} /></MainLayout> :
  <ApolloProvider client={client}>
  <Head><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
  </Head>
  <Navbar>
  <Component {...pageProps} />
 </Navbar>
 </ApolloProvider>
  )
}

export default MyApp;
