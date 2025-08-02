// src/components/contacto/Contacto.jsx
import './Contacto.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Contacto = () => {
  return (
    <>
      <Header />
    <section className="contacto container">
      <h2 className="text-center">Contacto</h2>

      <form className="formulario">
        <fieldset>
          <legend>Envíanos un mensaje</legend>

          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>

          <div className="campo">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Tu email" required />
          </div>

          <div className="campo">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" placeholder="Asunto del mensaje" required />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" placeholder="Tu mensaje..." required></textarea>
          </div>

          <button type="submit" className="btn">Enviar mensaje</button>
        </fieldset>
      </form>

      <div className="contacto-info">
        <div className="info-item">
          <svg className="icon" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" fill="var(--colorPrimario)"/>
          </svg>
          <h3>Dirección</h3>
          <p>Calle Falsa 123, Ciudad, País</p>
        </div>

        <div className="info-item">
          <svg className="icon" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="var(--colorPrimario)"/>
          </svg>
          <h3>Teléfono</h3>
          <p>+1 234 567 8900</p>
        </div>

        <div className="info-item">
          <svg className="icon" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="var(--colorPrimario)"/>
          </svg>
          <h3>Email</h3>
          <p>contacto@maquetsmart.com</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contacto;