import Characters from "@/components/characters";
import { ReqRickAndMortyApi, ResultCharacter } from "@/types/characters.type";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

type HomeProps = {
  characters: ReqRickAndMortyApi<ResultCharacter>;
};
export default function Home({ characters }: HomeProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "characters/setCharacters",
      payload: characters,
    });
  }, [characters, dispatch]);

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
        <Link href="/">
          <Logo
            src="/logo.png"
            width={400}
            height={80}
            alt={"rick and morty logo"}
          />
        </Link>
        <Characters />
      </Main>
    </div>
  );
}

//serverside props
export async function getServerSideProps(context: any) {
  const query = context.query;
  let path = `${process.env.NEXT_PUBLIC_SERVER_URL}/character`;

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
