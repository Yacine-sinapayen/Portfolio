import "./expertise.css";
import Card from "../common/card/Cards";
import { FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const Expertise = () => {
  const expertiseData = [
    {
      icon: <FaReact />,
      title: "Développement Frontend",
      description:
        "Création d'interfaces utilisateur modernes et réactives avec React et TypeScript",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Développement de code maintenable et évolutif suivant les meilleures pratiques",
      tags: ["SOLID", "DRY", "Testing"],
    },
    {
      icon: <FaDatabase />,
      title: "Architecture",
      description: "Conception d'architectures scalables et performantes",
      tags: ["REST API", "State Management", "Performance"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="expertise">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Mon Expertise
      </motion.h2>
      <motion.div 
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {expertiseData.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
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
