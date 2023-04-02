import { selectCharacters } from "@/redux/sliceCharacters";
import { useSelector } from "react-redux";
import Search from "../search";
import List from "./list";
import Pagination from "./list/pagination";
import SearchFilter from "./../search/filters";

export default function Characters() {
  const characters = useSelector(selectCharacters);
  return (
    <div>
      <Pagination info={characters.info} />
      <SearchFilter />
      <List characters={characters.results} />
    </div>
  );
}
