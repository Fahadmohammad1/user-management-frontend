import "./Banner.css";

const Banner = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          vel.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos
          rem, aut excepturi vitae minus? Illum, consequatur mollitia. Eligendi,
          tempore corrupti! Commodi expedita ratione sequi assumenda laborum
          deleniti pariatur? Beatae eos a sed at aliquid quasi non
          necessitatibus deleniti quae, aspernatur asperiores, autem perferendis
          sequi corporis optio incidunt molestias praesentium?
        </p>
        <button className="cta-button">Make Team</button>
        <button className="cta-button secondary">Login</button>
      </div>
    </section>
  );
};

export default Banner;
