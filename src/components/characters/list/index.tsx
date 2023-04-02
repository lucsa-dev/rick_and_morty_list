"use client";

import { selectCharacters } from "@/redux/sliceCharacters";
import { ResultCharacter } from "@/types/characters.type";
import Image from "next/image";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./card";

const CharacterItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;

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
export default function List({
  characters,
}: {
  characters: ResultCharacter[];
}) {
  return (
    <CharacterGrid>
      {characters.map((character: ResultCharacter) => (
        <CharacterItem key={character.id}>
          <Card character={character} />
        </CharacterItem>
      ))}
    </CharacterGrid>
  );
}
