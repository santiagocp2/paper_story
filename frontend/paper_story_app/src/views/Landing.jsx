import useRedirection from "../hooks/useRedirection";
import { Link } from 'react-router-dom';
import "../styles/Landing.css";

const Landing = () => {

    useRedirection("/home", 5000);

    return (
        <section
            id="landing"
            className="landing"
        >
            <div className="landing__content">
                <h1 className="landing__content__info">
                    <span className="landing__content__span-1">
                        Bienvenido a{" "}
                    </span>
                    <br />
                    <span className="landing__content__span-2">
                        Relatos de papel{" "}
                    </span>{" "}
                </h1>
                <p className="landing__content__p">
                    La mejor tienda de libros en línea, con una amplia variedad de libros.
                </p>
                <Link to="/home">
                    <button
                        type="button"
                        className="landing__button">
                        Comprar Ahora
                        <img
                            src="./arrow.svg"
                            alt="arrow right icon"
                            className="landing__button__logo"
                        />
                    </button>
                </Link>

                <div className="landing__statistics">
                    <div>
                        <p className="landing__statistics__number">+99</p>
                        <p className="landing__statistics__text">
                            Libros
                        </p>
                    </div>
                    <div>
                        <p className="landing__statistics__number">+5</p>
                        <p className="landing__statistics__text">
                            Autores
                        </p>
                    </div>
                    <div>
                        <p className="landing__statistics__number">+3</p>
                        <p className="landing__statistics__text">
                            Lenguajes
                        </p>
                    </div>
                </div>
            </div>

            <div className="landing__logo">
                <img
                    src="./logo.png"
                    alt="shoe collection"
                    height={500}
                    width={500}
                    className="object-contain relative z-10"
                />
            </div>
        </section>
    );
};

export default Landing;