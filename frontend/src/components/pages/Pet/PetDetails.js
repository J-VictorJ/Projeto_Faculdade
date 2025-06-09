import { useParams } from "react-router-dom";
import styles from "./PetDetails.module.css";

const petsData = {
  1: {
    name: "Rex",
    weight: 12,
    age: 3,
    images: ["lazaro.jpeg", "lazaro1.jpeg"],
    ownerContact: {
      nome: "ADM",
      email: "rex@email.com",
      telefone: "(61) 99999-8888",
      mensagem: "Lázaro foi um kchorrão que acabou entrando no condomínio e depois disso pegamos uma certa amizade com ele, mesmo ele sendo um cachorro de grande porte ele ainda se mostrou bem brincalhão. Felizmente ele já tem dono e foi o único que consegui achar para esse projeto. Lázaro foi um nome inventado por mim, não sabemos o nome verdadeiro dele."
    },
  },
  2: {
    name: "Luna",
    weight: 8,
    age: 2,
    images: ["lazaro.jpg"],
    ownerContact: {
      nome: "Maria Souza",
      email: "luna@email.com",
      telefone: "(61) 91111-2222",
    },
  },
};

function PetDetails() {
  const { id } = useParams();
  const pet = petsData[id];

  if (!pet) {
    return <p>Pet não encontrado!</p>;
  }

  return (
    <section className={styles.pet_details_container}>
      <div className={styles.petdetails_header}>
        <h1>Conhecendo o Kchorrinho: {pet.name}</h1>
        <p>Se tiver interesse, entre em contato com o responsável.</p>
      </div>
      <div className={styles.pet_images}>
        {pet.images.map((image, index) => (
          <img
            key={index}
            src={`/images/pets/${image}`}
            alt={pet.name}
          />
        ))}
      </div>
      <p>
        <span className="bold">Peso:</span> {pet.weight}kg
      </p>
      <p>
        <span className="bold">Idade:</span> {pet.age} anos
      </p>
      <p>
        <span className="bold">Responsável:</span> {pet.ownerContact.nome}
      </p>
      <p>
        <span className="bold">Email:</span> {pet.ownerContact.email}
      </p>
      <p>
        <span className="bold">Telefone:</span> {pet.ownerContact.telefone}
      </p>
      <p className={styles.note}>
        * Essa é uma simulação acadêmica para fins de projeto. O cão apresentado aqui é fictício.
      </p>
    </section>
  );
}

export default PetDetails;
