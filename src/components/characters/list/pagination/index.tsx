import Link from "next/link";
import { InfoProps } from "../../characters.type";

export default function Pagination({ info }: { info: InfoProps }) {
  const { count, next, pages, prev } = info;
  const nextPage = next ? next.split("page=")[1] : null;
  const prevPage = prev ? prev.split("page=")[1] : null;

  return (
    <div>
      {prevPage && <Link href={`/?page=${prevPage}`}>Prev</Link>}
      {nextPage && <Link href={`/?page=${nextPage}`}>Next</Link>}
    </div>
  );
}
