/*import api from "../../../utils/api";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./PetDetails.module.css";

/* hooks 
import useFlashMessage from "../../../hooks/useFlashMessage";

function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);

  async function schedule() {
    let msgType = "success";

    const data = await api
      .patch(`pets/schedule/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.petdetails_header}>
            <h1>Conhecendo o Kchorrinho: {pet.name}</h1>
            <p>Se tiver interesse, marque uma visita para conhecê-lo!</p>
          </div>
          <div className={styles.pet_images}>
            {pet.images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
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
          {token ? (
            <button onClick={schedule}>Solicitar uma Visita</button>
          ) : (
            <p>
              Você precisa <Link to="/register">criar uma conta</Link> para
              solicitar a visita.
            </p>
          )}
        </section>
      )}
    </>
  );
}

export default PetDetails;
*/

import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./PetDetails.module.css";

function PetDetails() {
  const [pet] = useState({
    _id: "1",
    name: "Lázaro",
    weight: 50,
    age: 6,
    available: false,
    images: ["lazaro.jpeg", "lazaro2.jpeg"],
    ownerContact: {
      nome: "ADM",
      email: "joao@email.com",
      telefone: "(61) 99999-8888",
    },
  });

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
