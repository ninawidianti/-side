function Hero() {
  return (
    <section id="hero" className="hero">
      {/* overlay gradien di area tengah–kiri */}
      <div className="overlay"></div>

      {/* konten tetap di tengah */}
      <div className="hero-content">
        <h1>
          <em>/side</em>
        </h1>
        <p>Some moments fade, but their light stays in Tumblerhaze</p>
        {/* <button className="btn-primary">Jelajahi Cerita</button> */}
      </div>
    </section>
  );
}

export default Hero;
