import "./expertise.css";
import Card from "../common/card/Cards";
import { FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Expertise = () => {
  const expertiseData = [
    {
      icon: <FaReact />,
      title: "React",
      description:
        "Développement d'interfaces utilisateur rapides et interactives, optimisées pour la performance et l'expérience utilisateur.",
    },
    {
      icon: <TbBrandNextjs />,
      title: "Next.js",
      description:
        "Création d'applications web performantes avec SSR, SSG et optimisations SEO pour une meilleure visibilité.",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
      description:
        "Écriture d'un code robuste et évolutif avec TypeScript, réduisant les bugs et améliorant la maintenabilité.",
    },
    {
      icon: <RiTailwindCssFill />,
      title: "Tailwind CSS",
      description:
        "Développement d'interfaces modernes et responsives rapidement grâce à Tailwind CSS.",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Respect des meilleures pratiques pour un code maintenable, lisible et facilement scalable.",
    },
    {
      icon: <FaDatabase />,
      title: "Architecture",
      description:
        "Conception d'architectures front-end optimisées pour la scalabilité et la fluidité des applications.",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };


  return (
    <div className="expertise">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Expertise
      </motion.h1>
      <div className="cards-container">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={cardVariants}
          >
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
