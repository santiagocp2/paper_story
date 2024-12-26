import useRedirection from "../hooks/useRedirection";
import { Link } from 'react-router-dom';

const Landing = () => {

    useRedirection("/home", 5000);

    return (
        <section
            id="landing"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col items-center w-full max-xl:padding-x pt-36">
                <h1 className="mt-10 font-palanquin text-5xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
                        Bienvenido a{" "}
                    </span>
                    <br />
                    <span className="text-gray-400 inline-block mt-3">
                        Relatos de papel{" "}
                    </span>{" "}
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-9 mt-7 mb-14 sm:max-w-sm">
                    La mejor tienda de libros en línea, con una amplia variedad de libros.
                </p>
                <Link to="/home">
                    <button
                        type="button"
                        className="flex items-center space-x-2 hover:bg-green-500 text-dark py-2 px-3 rounded bg-gray-500">
                        Comprar Ahora
                        <img
                            src="./arrow.svg"
                            alt="arrow right icon"
                            className="ml-2 rounded-full w-5 h-5"
                        />
                    </button>
                </Link>

                <div className="flex justify-center items-center flex-wrap w-full mt-20 gap-16">
                    <div>
                        <p className="text-4xl font-palanquin font-bold">+99</p>
                        <p className="font-montserrat leading-7 text-gray-400">
                            Libros
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl font-palanquin font-bold">+5</p>
                        <p className="font-montserrat leading-7 text-gray-400">
                            Autores
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl font-palanquin font-bold">+3</p>
                        <p className="font-montserrat leading-7 text-gray-400">
                            Lenguajes
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-Landing bg-cover bg-center">
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