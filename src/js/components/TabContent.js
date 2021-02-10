// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const tabContents = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 1rem;
  margin-bottom: 2em;
  height: 100%;
  grid-auto-flow: dense;
`;

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  }
};

// eslint-disable-next-line react/prop-types
const TabContent = ({ children }) => (
  <div
    css={css`
      left: 0;
      right: 0;
      margin: auto;
    `}
  >
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      css={tabContents}
    >
      {children}
    </motion.div>
  </div>
);

export default TabContent;
