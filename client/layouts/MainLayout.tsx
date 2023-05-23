import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Музикальна площадка"}</title>
        <meta
          name="description"
          content={
            `Музикальна площадка. Тут кожен може залишити свій трек та стати відомим.` +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Музика, трекі, артисти"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
