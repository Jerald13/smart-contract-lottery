import Head from "next/head"
import Header from "../app/Header"
import { useMoralis } from "react-moralis"
// import styles from "../styles/Home.module.css"
// import Header from "../components/Header"
import LotteryEntrance from "../app/LotteryEntrance"
// import { useMoralis } from "react-moralis"

export default function Home() {
  return (
    <div>
      <Head>
        <title> Smart Contract Lottery </title>
        <meta name="description" content="Our Smart Contract Lotterey"></meta>
        <link rel="icon" href="/favicon.ico " />
      </Head>
      <Header> </Header>
      <LotteryEntrance> </LotteryEntrance>
    </div>
  )
}
