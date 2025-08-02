import AppStoreImage from '../../assets/appstore.png';
import GooglePlayImage from '../../assets/googleplay.png';
import FuturisticImage from '../../assets/Group 2.png';


const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero__content">
                    <h2 className="hero__title">Maquetas 3D futuristas</h2>
                    <p className="hero__subtitle">Tenemos todo lo necesario, para todo tipo de proyectos escolares y de cualquier materia.</p>
                    <p className="hero__description">La imaginación la pones TÚ.</p>
                    <div className="hero__buttons">
                        <a href="#" className="button">¡Cotiza la tuya!</a>
                        <a href="#" className="button">Contáctanos</a>
                    </div>
                    <p className="hero__contact">Encuéntranos en:</p>
                    <div className="hero__download-buttons">
                        <a target='_blank' href="https://apps.apple.com/ec/app/3d-modeling-design-my-model/id1583923782">

                            <img src={AppStoreImage} alt="App Store" />
                        </a>
                        <a  target="_blank" href="https://play.google.com/store/apps/details?id=com.inforcegames.app3dmodelling&hl=es_EC&pli=1">
                            <img src={GooglePlayImage} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div>
                    <img src={FuturisticImage} alt="Maqueta futurista" />
                </div>
            </section>
        </main>
    )
}

export default Main