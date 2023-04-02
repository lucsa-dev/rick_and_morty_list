import { ResultCharacter } from "@/types/characters.type";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }: { isFlipped: boolean }) =>
    isFlipped ? "rotateY(180deg)" : "none"};
  cursor: pointer;
`;
const Perfil = styled(Image)`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

const CardFace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  background-color: black;
`;

const CardBack = styled(CardFace)`
  background-color: black;
  border: 2px solid #9ec150;
  border-radius: 10px;
  transform: rotateY(180deg);
`;

export default function Card({ character }: { character: ResultCharacter }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <CardContainer isFlipped={isFlipped} onClick={handleCardClick}>
      <CardFront>
        <Perfil src={character.image} layout="fill" alt={character.name} />
      </CardFront>
      <CardBack>
        <h3>{character.name}</h3>
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.status && <p>Status: {character.status}</p>}
        {character.type && <p>Type: {character.type}</p>}
      </CardBack>
    </CardContainer>
  );
}
