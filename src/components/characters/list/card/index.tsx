import { ResultCharacter } from "@/types/characters.type";
import { useState } from "react";
import { MdInfoOutline, MdRotateRight } from "react-icons/md";
import Link from "next/link";
import FavoriteButton from "./favorites";
import {
  BottomBar,
  CardBack,
  CardContainer,
  CardFront,
  Perfil,
} from "./card.styles";

export default function Card({ character }: { character: ResultCharacter }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <CardContainer isFlipped={isFlipped}>
      <CardFront>
        <Perfil src={character.image} layout="fill" alt={character.name} />
        <BottomBar>
          <FavoriteButton character={character} />
          <Link
            href={`/character/${character.id}`}
            title={`Ir para página do ${character.name}`}
          >
            <MdInfoOutline />
          </Link>
          <button onClick={handleCardClick} title="girar a carta">
            <MdRotateRight />
          </button>
        </BottomBar>
      </CardFront>
      <CardBack onClick={handleCardClick} title="voltar">
        <h3>{character.name}</h3>
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.status && <p>Status: {character.status}</p>}
        {character.type && <p>Type: {character.type}</p>}
      </CardBack>
    </CardContainer>
  );
}
