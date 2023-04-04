import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }: any) {
  const Main = styled.div`
    background-image: url("/bg.jpeg");
    padding: 0px;
    margin: 0px;
  `;
  const Logo = styled(Image)`
    display: block;
    margin: 0 auto;
  `;
  const fadeInOutVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInOutVariants}
      >
        <Head>
          <title>Rick And Morty</title>
        </Head>
        <Main>
          {" "}
          <Link href="/">
            <Logo
              src="/logo.png"
              width={400}
              height={80}
              alt={"rick and morty logo"}
            />
          </Link>
          {children}
        </Main>
      </motion.div>
    </>
  );
}
