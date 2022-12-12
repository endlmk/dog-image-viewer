function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1>Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrived from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  );
}

function Gallery() {
  return (
    <div className="column is-vcenterd is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
}

function Image() {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={url} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
}

export default App;
