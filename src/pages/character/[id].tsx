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
import Character from "@/components/character";

type CharacterProps = {
  character: ResultCharacter;
};
export default function CharacterPage({ character }: CharacterProps) {
  console.log("🚀 ~ file: [id].tsx:18 ~ Home ~ characters:", character);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Character character={character} />
    </Layout>
  );
}

//serverside props
export async function getServerSideProps(context: any) {
  const id = context.query.id;
  if (!id) return;
  let path = `${process.env.NEXT_PUBLIC_SERVER_URL}/character/${id}`;

  const res = await fetch(path);

  const data = await res.json();
  return {
    props: {
      character: data,
    },
  };
}
