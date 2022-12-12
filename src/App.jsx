import { useEffect } from "react";
import { fetchImages } from "./api";

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
  const urls = null;
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      console.log(urls);
    });
  }, []);
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
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

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />
  }
  return (
    <div className="columns is-vcenterd is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
}

export default App;
