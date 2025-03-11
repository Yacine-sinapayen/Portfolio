import "./hero.css";
import heroImage from "../../../public/portrait.png";
import Header from "../header/Header";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="hSection left">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hTitle"
          >
            Développeur
            <span> React TypeScript</span>
          </motion.h1>
          <p className="hDescription">
            Je développe des interfaces web performantes et évolutives, offrant
            une expérience utilisateur intuitive et optimale, avec React,
            Tailwind et des tests automatisés.
          </p>

          <div className="hButtons">
            <button className="button-primary button-primary:hover">
              Travaillons ensemble !
            </button>
            <button className="button-secondary button-secondary:hover">
              Découvrir mes projets
            </button>
          </div>
        </div>

        <div className="hSection right">
          {/* IMAGE SECTION */}
          <div className="hImage">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src={heroImage}
              alt="Hero"
              className="hImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
