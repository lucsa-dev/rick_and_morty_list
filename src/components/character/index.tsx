import { ResultCharacter } from "@/types/characters.type";
import Image from "next/image";
import styled from "styled-components";
import Card from "../characters/list/card";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const CharacterHeader = styled.h2`
  margin: 0;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;

const CharacterDetail = styled.p`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

const CharacterEpisodes = styled.ul`
  margin-top: 1rem;
  padding-left: 1rem;
`;

const CharacterEpisode = styled.li`
  margin: 0.5rem 0;
`;

const Character = (props: { character: ResultCharacter }) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    created,
  } = props.character;
  const Button = styled.button`
    border: none;
    weight: extra-bold;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: black;
    color: #9ec150;
    border: 1px solid #9ec150;
    &:hover {
      background-color: #9ec150;
      color: black;
    }
  `;
  const handleBack = () => {
    window.history.back();
  };
  return (
    <CharacterContainer>
      <Button onClick={handleBack}>Voltar</Button>
      <CharacterHeader>{name}</CharacterHeader>
      <Card character={props.character} />
      <CharacterInfo>
        <CharacterDetail>Status: {status}</CharacterDetail>
        <CharacterDetail>Species: {species}</CharacterDetail>
        {type && <CharacterDetail>Type: {type}</CharacterDetail>}
        <CharacterDetail>Gender: {gender}</CharacterDetail>
        <CharacterDetail>Origin: {origin.name}</CharacterDetail>
        <CharacterDetail>Location: {location.name}</CharacterDetail>
        <CharacterDetail>Created: {created}</CharacterDetail>
        <CharacterEpisodes>
          <p>Episodes:</p>
          {episode.map((ep) => (
            <CharacterEpisode key={ep}>{ep}</CharacterEpisode>
          ))}
        </CharacterEpisodes>
      </CharacterInfo>
    </CharacterContainer>
  );
};

export default Character;
