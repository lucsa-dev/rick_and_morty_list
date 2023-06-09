import Characters from "@/components/characters";
import Favorites from "@/components/favorites";
import { ReqRickAndMortyApi, ResultCharacter } from "@/types/characters.type";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

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

  return (
    <Layout>
      <Characters />
      <Favorites />
    </Layout>
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
