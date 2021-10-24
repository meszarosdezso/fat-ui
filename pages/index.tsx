import Head from 'next/head'
import React from 'react'
import Banners from '../components/Banners'
import Buttons from '../components/Buttons'
import Cards from '../components/Cards'
import Chips from '../components/Chips'
import Colors from '../components/Colors'
import Components from '../components/Components'
import Dialogs from '../components/Dialogs'
import FormElements from '../components/FormElements'
import Lists from '../components/Lists'
import Tables from '../components/Tables'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Typography from '../components/Typography'

export default function Home() {
  return (
    <div id={'Home'}>
      <Head>
        <title>Fat UI</title>
      </Head>
      <ThemeSwitcher />

      <h1>
        <span className="title text-primary">Fat </span>
        Design
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

      <div id="copyright">2021 © meszarosdezso</div>
    </div>
  )
}
