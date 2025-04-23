import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setSuccess(false);
          setError(true);
        },
      );
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
    >
      <h1>Contactez moi</h1>
      <form ref={form} onSubmit={sendEmail} action="">
        <div className="formItem">
          <label htmlFor="">Nom</label>
          <input name="user_name" type="text" placeholder="Joe Doe" />
        </div>
        <div className="formItem">
          <label htmlFor="">Email</label>
          <input name="user_email" type="text" placeholder="john@gmail.com" />
        </div>
        <div className="formItem">
          <label htmlFor="">Message</label>
          <textarea
            name="user_message"
            rows="10"
            placeholder="Écrivez votre message ici"
          ></textarea>
        </div>
        <button className="button-primary button-primary:hover">
          Envoyer
        </button>
        {success && <p>Message envoyé avec succès</p>}
        {error && <p>Erreur lors de l'envoi du message</p>}
      </form>
    </motion.div>
  );
}
