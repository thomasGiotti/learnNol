import React, { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { Modal } from "@mui/material";

interface ContactFormProps {
  serviceId: string;
  templateId: string;
  userId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  serviceId,
  templateId,
  userId,
}) => {
  const [isSucces, setIsSucces] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId).then(
      (result) => {
        console.log(result.text);
        // Insérez ici la logique supplémentaire après l'envoi du formulaire, par exemple l'affichage d'un message de succès.
        setIsSucces(true);
      },
      (error) => {
        console.log(error.text);
        setIsSucces(false);
        // Insérez ici la logique supplémentaire en cas d'échec de l'envoi du formulaire, par exemple l'affichage d'un message d'erreur.
      }
    );

    e.currentTarget.reset();
  };

  return (
    <div className="w-full md:mx-0 mx-3 max-w-md ">
      <div className="">
        <form
          className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700  dark:text-gray-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700  dark:text-gray-500 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="exemple@adresse.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700  dark:text-gray-500 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700   dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows={4}
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#ED7300] hover:bg-[#7a3b00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
        <Modal
          open={isSucces}
          onClose={setIsSucces}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mx-3 h-30  md:w-4/12 bg-slate-100 text-black px-10 py-10 m-auto self-center rounded mt-[50%] md:mt-[25%] md:ml-[30%] ">
            <h2 id="modal-modal-title">
              {isSucces
                ? "Votre message a bien été envoyé"
                : "Une erreur est survenue"}
            </h2>
            <button
              onClick={() => setIsSucces(false)}
              className="bg-slate-400 px-2 py-2 rounded"
            >
              fermer
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ContactForm;
