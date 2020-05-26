import Link from "next/link";
import Head from "next/head";

function Layout({
  children,
  title = null
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/"><a>Home</a></Link>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout;
