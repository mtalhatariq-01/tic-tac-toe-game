import Head from "next/head";
import GameBoard from "../app/components/GameBoard";
import Particle from "./components/Particle";
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>
      <main>
        <Particle />
        <GameBoard />
      </main>
    </>
  );
};

export default Home;
