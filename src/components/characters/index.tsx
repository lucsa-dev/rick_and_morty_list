import { ReqRickAndMortyApi, ResultCharacters } from "@/types/characters.type";
import List from "./list";
import Pagination from "./list/pagination";

export default function Characters({
  characters,
}: {
  characters: ReqRickAndMortyApi<ResultCharacters>;
}) {
  return (
    <div>
      <Pagination info={characters.info} />
      <List results={characters.results} />
    </div>
  );
}
