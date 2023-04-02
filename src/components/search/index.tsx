import { ReqRickAndMortyApi, ResultCharacter } from "@/types/characters.type";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SearchFilter from "./filters";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<ResultCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/character?name=${search}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "characters/setCharacters",
            payload: data as ReqRickAndMortyApi<ResultCharacter>,
          });
          setLoading(false);
        });
    } else {
    }
  }, [search, dispatch]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a user"
        ref={searchRef}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <SearchFilter />
    </div>
  );
}
