import GlobalStyle from "../styles/global";

export default function MyApp({
  Component, pageProps
}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
