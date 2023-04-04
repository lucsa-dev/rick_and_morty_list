import { info } from "@/types/characters.type";
import Link from "next/link";
import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Pagination({ info }: { info: info }) {
  const Button = styled(Link)`
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
    background-color: #9ec150;
    &:hover {
      color: black;
    }
  `;
  const Control = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 50%;
  `;
  const { next, prev } = info;
  const nextPage = next ? next.split("page=")[1] : null;
  const prevPage = prev ? prev.split("page=")[1] : null;

  return (
    <Control>
      {prevPage && (
        <Button href={`/?page=${prevPage}`} title="Voltar para página anterior">
          <GrPrevious />
        </Button>
      )}
      {nextPage && (
        <Button href={`/?page=${nextPage}`} title="Ir para próxima página">
          <GrNext />
        </Button>
      )}
    </Control>
  );
}
