function PageBanner({ classNameForBanner, text, source }) {
  return (
    <section className={`${classNameForBanner}`}>
      {text && <h1 className="home__banner-slogan">{text}</h1>}
      <img
        src={`${source}`}
        alt="Bannière de la page d'accueil de Kasa"
        className="home__banner-image"
      />
    </section>
  );
}

export default PageBanner;
