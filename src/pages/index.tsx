import Characters from "@/components/characters";
import { ReqRickAndMortyApi, ResultCharacters } from "@/types/characters.type";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

type HomeProps = {
  characters: ReqRickAndMortyApi<ResultCharacters>;
};
export default function Home({ characters }: HomeProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "characters/setCharacters",
      payload: characters.results,
    });
  }, [characters.results, dispatch]);

  const Main = styled.div`
    background-image: url("bg.jpeg");
    padding: 0px;
    margin: 0px;
  `;
  const Logo = styled(Image)`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <Main>
        <Logo
          src="/logo.png"
          width={400}
          height={80}
          alt={"rick and morty logo"}
        />
        <Characters characters={characters} />
      </Main>
    </div>
  );
}

//serverside props
export async function getServerSideProps(context: any) {
  const query = context.query;
  let path = "https://rickandmortyapi.com/api/character";

  const queryParams = new URLSearchParams(query).toString();

  if (queryParams) {
    path = `${path}?${queryParams}`;
  }

  const res = await fetch(path);

  const data = await res.json();
  return {
    props: {
      characters: data,
    },
  };
}
