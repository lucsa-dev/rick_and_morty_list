import { selectFavorites } from "@/redux/sliceFavorite";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";
import List from "../characters/list";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  const Title = styled.h1`
    text-align: center;
  `;
  if (favorites.length === 0)
    return (
      <Title>
        clique no <MdOutlineFavoriteBorder /> para marcar como favorito!
      </Title>
    );
  return (
    <>
      <Title>Favoritos</Title>
      <List characters={favorites} />
    </>
  );
}
