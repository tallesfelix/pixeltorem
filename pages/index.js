import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useReducer, useState } from 'react'
import styles from '../styles/Home.module.css'

const initialState = {
  px: 16,
  rem: 1,
}

const reducer = (state, action) => {
  console.log(action)
}

export default function Home() {
  const [ratio, setRatio] = useState(16)
  const [px, setPx] = useState(16)
  const [rem, setRem] = useState(1)

  const onChangeRem = (e) => {
    const remValue = e.target.value
    if (remValue < 0) return 0;
    setRem(remValue)
    setPx(remValue * ratio)
  }

  const onChangePx = (e) => {
    const pxValue = e.target.value
    if (pxValue < 0) return 0;
    setPx(pxValue)
    setRem(pxValue / ratio)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversor PX para REM</title>
        <meta name="description" content="Conversor de unidades PX para REM" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id='${process.env.NEXT_PUBLIC_GA_ID}'`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Calculadora PX para REM</h1>
        <div className={styles.inputsContainer}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='px-units'>Pixels</label>
            <input className={styles.input} onChange={(e) => onChangePx(e)} type="number" min="0" name="px-units" id="px-units" value={px}></input>
            <p className={styles.innerLabel}>px</p>
          </div>
          <p className={styles.equivalent}>=</p>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='rem-units'>REM</label>
            <input className={styles.input} onChange={(e) => onChangeRem(e)} type="number" min="1" name="rem-units" id="rem-units" value={rem}></input>
            <p className={styles.innerLabel}>rem</p>
          </div>
        </div>
      </main>
    </div>
  )
}
