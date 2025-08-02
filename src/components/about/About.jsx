import School1 from '../../assets/Escuela1.webp';
import School2 from '../../assets/Escuela2.webp';
import School3 from '../../assets/Escuela3.webp';
import School7 from '../../assets/Escuela7.webp';

const About = () => {
    return (
        <>
            <section className="container text-center" id="nosotros">
                <div className="servicios">
                    <h2 className="titulo-servicios">Recomendados por</h2>
                    <div className="linea" />
                </div>
            </section>

            <main className="container">
                <div className="contenedor-escuelas">
                    <img src={School1} alt="School 1" />
                    <img src={School2} alt="School 2" />
                    <img src={School3} alt="School 3" />
                    <img src={School7} alt="School 7" />
                </div>

                <div className="info-cards">
                    <div className="info-card">
                        <h3>¿Quiénes somos?</h3>
                        <p>
                            Somos un equipo apasionado por el diseño y modelado 3D de maquetas futuristas, enfocados en brindar soluciones visuales modernas y realistas para instituciones educativas, arquitectos y emprendedores.
                        </p>
                    </div>
                    <div className="info-card">
                        <h3>Nuestros valores</h3>
                        <p>
                            Nos guiamos por la innovación, el compromiso con la calidad, la atención personalizada y la ética profesional. Creemos en el poder de las ideas y en la importancia de construir el futuro con creatividad.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
