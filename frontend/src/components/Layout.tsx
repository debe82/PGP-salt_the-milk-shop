import Head from "next/head"


export const Layout = ({children}: any) => {
  return (
      <>
        <Head>
          <title>The Milk Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="home-header">
          THE MILK STORE
        </header>
        <section className="general-layout">
          { children }
        </section>
        <footer className="footer">
          <a href="https://github.com/debe82/PGP-salt_the-milk-shop">Link to GitHub project</a>
        </footer>
      </>
  )
}