import Link from "next/link";
import styled from "styled-components";
import { InfoProps } from "../../characters.type";

export default function Pagination({ info }: { info: InfoProps }) {
  const Button = styled(Link)`
    background-color: #9ec150;
    border: none;
    color: black;
    weight: extra-bold;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
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
      {prevPage && <Button href={`/?page=${prevPage}`}>PREV</Button>}
      {nextPage && <Button href={`/?page=${nextPage}`}>NEXT</Button>}
    </Control>
  );
}
