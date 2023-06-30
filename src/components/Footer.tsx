import { RiSmartphoneLine, RiMapPin2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#d1e5f7]  p-10 h-30 md:mb-0 mb-10  dark:bg-[#00101e]   ">
      <section className="  md:w-1/2 flex flex-wrap m-auto ">
        <article className="text-black dark:text-white w-full md:w-1/2 ">
          <h4 className="text-2xl font-semibold">Contact</h4>
          <ul className="">
            <li className="my-1 flex">
              <RiMapPin2Line className="mt-0.5 mr-2" size={20} /> 60110 Méru
            </li>
            <li className="my-1 flex">
              <RiSmartphoneLine className="mt-0.5 mr-2" size={20} />{" "}
              <a href="tel:+33603400339">+33603400339</a>
            </li>
            <li></li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
