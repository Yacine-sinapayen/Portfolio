import "./expertise.css";
import Card from "../common/card/Cards";
import { FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import useMediaQuery from "../../hooks/useMediaQuery";
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
        "Écriture d’un code robuste et évolutif avec TypeScript, réduisant les bugs et améliorant la maintenabilité.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
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

  const isDesktop = useMediaQuery("(min-width: 768px)");
  console.log("isDesktop", isDesktop);

  return (
    <div className="expertise">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Expertise
      </motion.h2>
      <motion.div
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            variants={isDesktop ? cardVariants : {}}
          >
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;
