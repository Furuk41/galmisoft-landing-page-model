import Header from "../partials/Header";
import Footer from "../partials/Footer";
import PageIllustration from "../partials/PageIllustration";
import PaginaPrincipal from "../images/plazatodo/principal.png";
import Tienda from "../images/plazatodo/tienda.png";
import RegistroTienda from "../images/plazatodo/registro-tienda.png";
import CompraMovil01 from "../images/plazatodo/Compra-movil-01.png";
import CompraMovil02 from "../images/plazatodo/Compra-movil-02.png";
import CompraMovil03 from "../images/plazatodo/Compra-movil-03.png";
import CompraMovil04 from "../images/plazatodo/Compra-movil-04.png";

export default function TiendaVirtual() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                  Reach goals that matter
                </div> */}
                <h1 className="h2 mb-4">Tienda Virtual</h1>
                <p className="text-xl text-gray-400">
                  eB2B en la nube para distribuidores
                </p>
              </div>

              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                {/* add video */}
                <div className="max-w-full mx-auto md:max-w-none h-auto">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={PaginaPrincipal}
                    width="740"
                    height="505"
                    alt="Nosotros"
                  />
                </div>
              </div>
              <div className="grid gap-20">
                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={Tienda}
                      width="540"
                      height="405"
                      alt="proceso general strategio"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={RegistroTienda}
                      width="540"
                      height="405"
                      alt="flujo strategio"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3rd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={CompraMovil01}
                      width="540"
                      height="405"
                      alt="ciclo strategio"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={CompraMovil02}
                      width="540"
                      height="405"
                      alt="esquema strategio"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={CompraMovil03}
                      width="540"
                      height="405"
                      alt="cobertura strategio"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 6th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <img
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={CompraMovil04}
                      width="540"
                      height="405"
                      alt="evualuacion desempeno"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        More speed. Less spend
                      </div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
