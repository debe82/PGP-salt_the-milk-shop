

export const Layout = ({children}: any) => {
  return (
      <>
        <header className="home-header">
          THE MILK STORE
        </header>
        <section className="general-layout">
          { children }
        </section>
      </>
  )
}