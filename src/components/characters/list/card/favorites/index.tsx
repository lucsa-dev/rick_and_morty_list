import { ResultCharacter } from "@/types/characters.type";
import { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export default function FavoriteButton({
  character,
}: {
  character: ResultCharacter;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={checkFavorite}
      title={`Marcar ${character.name} como favorito`}
    >
      {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
    </button>
  );
}
