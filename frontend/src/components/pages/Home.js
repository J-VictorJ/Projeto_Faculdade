/*import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Home.module.css";

function Home() {
  function Home() {
  const [pets] = useState([
    {
      _id: "1",
      name: "Rex",
      weight: 12,
      images: ["rex.jpg"],
      available: true,
    },
    {
      _id: "2",
      name: "Luna",
      weight: 8,
      images: ["luna.jpg"],
      available: false,
    },
    {
      _id: "3",
      name: "Cachorro doido",
      weight: 15,
      images: ["thor.jpg"],
      available: true,
    },
  ]);
  }

  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Kchorrinhos</h1>
        <p>Veja os detalhes de cada um e conheça o Dono deles</p>
      </div>
      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.pet_card} key={pet._id}>
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
                className={styles.pet_card_image}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              {pet.available ? (
                <Link to={`/pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>Adotado!</p>
              )}
            </div>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis para adoção no momento!</p>
        )}
      </div>
    </section>
  );
}

export default Home;*/

import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Home.module.css";

function Home() {
  const [pets] = useState([
    {
      _id: "1",
      name: "Lázaro",
      weight: 50,
      images: ["lazaro.jpeg"],
      available: true,
    },
    {
      _id: "2",
      name: "Luna",
      weight: 8,
      images: ["labra.jpg"],
      available: false,
    },
  ]);

  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Kchorrinhos</h1>
        <p>Veja os detalhes de cada um e conheça o Dono deles</p>
      </div>
      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.pet_card} key={pet._id}>
              <div
                style={{
                  backgroundImage: `url(/Projeto_Faculdade/pets${pet.images[0]})`,
                }}
                className={styles.pet_card_image}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              {pet.available ? (
                <Link to={`/pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>Adotado!</p>
              )}
            </div>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis para adoção no momento!</p>
        )}
      </div>
    </section>
  );
}

export default Home;

