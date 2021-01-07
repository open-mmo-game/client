import Head from "next/head";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="container">
        <p>
          ¡Sumérgete en una aventura sin igual en un mundo nunca antes visto!.
          <br />
          Conocerás incontables aliados y enemigos en el mundo de fantasía.
        </p>
        <p>Juega solo o con amigos, se el heroe de tu propia historia.</p>
      </div>
    </>
  );
}

export default HomePage;
