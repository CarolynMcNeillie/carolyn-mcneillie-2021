import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/normalize.css"
import "../styles/styles.scss"
import Background from "../components/Background/Background"
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 2,
      delayChildren: 2.8,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Background />
      <motion.div 
        className="card"
        variants={container}
        initial="hidden"
        animate="visible"
      >
          <motion.h1 variants={item}>Carolyn McNeillie</motion.h1>
          <motion.h2 variants={item}>
            Toronto / Hamilton / Anywhere <br />
            <a href="mailto:hello@carolynmcneillie.com">
              hello@carolynmcneillie.com
            </a>
          </motion.h2>
          <motion.p className="text" variants={item}>
            I am a Senior Web Developer with a background in design, marketing, e-commerce, book publishing, mural painting, and{" "}
            art restoration. Using React, TypeScript,
            and GraphQL, I have helped build e-commerce, websites, and web
            applications for clients including House of Anansi, Green Shield, & Shopify. I ♥️ CSS.
          </motion.p>
      </motion.div>
    </main>
  ) 
}

export default IndexPage

export const Head: HeadFC = () => <title>Carolyn McNeillie</title>
