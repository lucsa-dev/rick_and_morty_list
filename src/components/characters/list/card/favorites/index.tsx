import { selectFavorites } from "@/redux/sliceFavorite";
import { ResultCharacter } from "@/types/characters.type";
import { useState, useEffect } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteButton({
  character,
}: {
  character: ResultCharacter;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    // Verifica se o personagem já está nos favoritos
    const isAlreadyFavorite = favorites.some(
      (item) => item.id === character.id
    );
    setIsFavorite(isAlreadyFavorite);
  }, [character.id, favorites]);

  const checkFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch({
        type: "favorites/addFavorite",
        payload: character,
      });
    } else {
      dispatch({
        type: "favorites/removeFavorite",
        payload: character,
      });
    }
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
