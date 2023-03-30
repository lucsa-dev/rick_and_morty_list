"use client";

import { ReqRickAndMortyApi, ResultCharacters } from "@/types/characters.type";
import Image from "next/image";
import styled from "styled-components";
import { CharacterProps } from "../characters.type";

const CharacterItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 5px #ccc;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }
`;

const CharacterGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export default function List({ results }: { results: ResultCharacters[] }) {
  return (
    <CharacterGrid>
      {results.map((character: ResultCharacters) => (
        <CharacterItem key={character.id}>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
          />
          <h3>{character.name}</h3>
        </CharacterItem>
      ))}
    </CharacterGrid>
  );
}
