import "./Banner.css";

const Banner = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          vel.
        </h1>
        <p>Short description of the hero section goes here.</p>
        <button className="cta-button">Call to Action</button>
        <button className="cta-button secondary">Secondary Action</button>
      </div>
    </section>
  );
};

export default Banner;
