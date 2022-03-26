import Head from "next/head"
import Script from "next/script"
import React from "react"
import Banners from "../components/Banners"
import Buttons from "../components/Buttons"
import Cards from "../components/Cards"
import Chips from "../components/Chips"
import Colors from "../components/Colors"
import Components from "../components/Components"
import Dialogs from "../components/Dialogs"
import Footer from "../components/Footer"
import FormElements from "../components/FormElements"
import Header from "../components/Header"
import Lists from "../components/Lists"
import Tables from "../components/Tables"
import ThemeSwitcher from "../components/ThemeSwitcher"
import Typography from "../components/Typography"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fat UI</title>
      </Head>
      <div id={"Home"}>
        <Header fixed>
          <ThemeSwitcher />
        </Header>

        <h1>
          <span className="display text-primary">Fat </span>
          UI
        </h1>

        <Typography />
        <Colors />
        <Buttons />
        <Chips />
        <Cards />
        <FormElements />
        <Lists />
        <Tables />
        <Banners />
        <Dialogs />
        <Components />
      </div>
      <Footer />
    </div>
  )
}
