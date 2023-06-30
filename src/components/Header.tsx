import { Fade } from "react-awesome-reveal";

interface Props {
  title: string;
  navigate: (value: string) => void;
  navValue: string;
  subTitle: string;
}

const Header = ({
  title,
  navigate,
  navValue,
  subTitle,
}: Props): JSX.Element => {
  const handleNavigate = (value: string) => {
    navigate(value);
  };

  return (
    <header className="pt-8  md:m-auto bg-[#d1e5f7] dark:bg-[#00101e] pb-5">
      <section className="flex md:items-center flex-row md:justify-between  justify-center xl:w-1/2 md:w-10/12 md:m-auto mx-2 ">
        <h1 className="font-dune text-3xl text-black dark:text-white ">
          R2DCLOUD
        </h1>
        <nav>
          <ul className="DESKTOP-MENU hidden space-x-8 md:flex">
            <li
              className="text-black dark:bg-white  font-semibold cursor-pointer "
              onClick={() => handleNavigate("depannage")}
            >
              <a className={navValue === "depannage" ? "underline" : ""}>
                Depannage
              </a>
            </li>
            <li
              className="text-black dark:bg-white  font-semibold cursor-pointer "
              onClick={() => handleNavigate("videosurveillance")}
            >
              <a
                className={navValue === "videosurveillance" ? "underline" : ""}
              >
                Vidéosurveillance
              </a>
            </li>
            <li
              className="text-black  dark:bg-white font-semibold cursor-pointer "
              onClick={() => handleNavigate("minage")}
            >
              <a className={navValue === "minage" ? "underline" : ""}>Minage</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="flex  mt-20 flex-col md:w-3/5 m-auto ">
        <Fade direction="down" duration={2000} triggerOnce>
          <h2
            className={
              "font-inter  lg:text-[5rem]  md:text-5xl text-4xl bg-gradient-to-tl from-[#005AAD] to-[#ED7300] font-bold text-center text-transparent bg-clip-text"
            }
          >
            {title}
          </h2>
        </Fade>

        <p className="text-black dark:text-white mt-6 text-lg font-semibold m-auto text-center">
          {subTitle}
        </p>
      </section>
    </header>
  );
};

export default Header;
