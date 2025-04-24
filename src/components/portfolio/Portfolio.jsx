// cursor: disable
import "./portfolio.css";
import { motion } from "framer-motion";
import { portfolioData } from "./data/portfolioData";
import Card from "../common/card/Cards";

export default function Portfolio() {
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
    <div className="portfolio" id="portfolio">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        Portfolio
      </motion.h1>
      <div className="portfolio-container">
        {portfolioData.map((project) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={cardVariants}
          >
            <Card
              title={project.title}
              description={project.desc}
              tags={project.tags}
              img={project.img}
              link={project.link}
              github={project.github}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
