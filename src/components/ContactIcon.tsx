import { BsWhatsapp } from "react-icons/bs";

const ContactIcon = () => {
  return (
    <section>
      <a
        className=" animate-bounce bg-[#25d366] rounded-full fixed bottom-20 md:right-7  right-3 z-50"
        href="https://wa.me/+33603400339"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="" color="white" size={50} />
      </a>
    </section>
  );
};

export default ContactIcon;
