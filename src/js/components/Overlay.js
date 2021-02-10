// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import React, { Fragment, useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import SanitizedHTML from "react-sanitized-html";
import FocusTrap from "focus-trap-react";

import { motion, AnimatePresence } from "framer-motion";

/** @jsx jsx */
// eslint-disable-next-line react/prop-types
const Overlay = ({ text, name, exit, profession, img, isClosed }) => {
  const containerOn = css`
     {
      height: 100%;
      width: 100%;
      position: fixed;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      z-index: 9999999;
      opacity: 0.5;
      background: black;
    }
  `;

  const professionName = css`
     {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      line-height: 2em;

      margin-top: 2em;
      justify-content: center;
      margin-right: 2em;
      max-width: 18em;

      @media only screen and (max-width: 600px) {
        margin-top: 1em;
        margin-right: 0;
        margin-bottom: 2em;
      }
    }
  `;
  const box2 = css`
     {

      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: 99999999;
      position: fixed;
      height: 30em;
      width: 36em;
      background: black;
      transform: scale(0);
      -webkit-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);

      transition: transform .35s ease-in-out;

      // @keyframes shrink {
      //   from {
      //     transform: scale(1);
      //   }
      //   to {
      //     transform: scale(5);
      //   }
      }

      @media only screen and (max-width: 600px) {
        height: 40em;
        width: 20em;
      }
    }
  `;

  const box = css`
     {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: 99999999;
      position: fixed;
      height: 30em;
      width: 36em;
      background: black;

      -webkit-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);

      @media only screen and (max-width: 600px) {
        height: 40em;
        width: 20em;
      }
    }
  `;
  const textBox = css`
     {
      display: flex;
      justify-content: center;
      justify-content: space-around;
      width: 100%;
      color: white;
      text-align: justify;
      flex-grow: 3;

      @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `;

  const exitButton = css`
     {
      position: absolute;
      top: 0;
      top: 1em;
      right: 1em;
      cursor: pointer;
      color: white;
      background: transparent;
      border: none;
    }
  `;

  const printButton = css`
     {
      position: absolute;
      top: 1em;
      left: 1em;
      cursor: pointer;
      color: white;
      background: transparent;
      border: none;
    }
  `;

  const [overlay, setOverlayAnimation] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  function toggleOverlayAnimation() {
    overlay ? setOverlayAnimation(false) : setOverlayAnimation(true);
  }

  function exitAndPlayAnimation() {
    exit();
  }

  return (
    <AnimatePresence>
      {isClosed && (
        <FocusTrap>
          <div
            id="section-to-print"
            css={css`
               {
                position: absolute;
              }
            `}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={exitAndPlayAnimation}
              style={{
                position: "fixed",
                zIndex: "99999"
              }}
            >
              <div css={containerOn}></div>
            </motion.div>

            <motion.div
              role="dialog"
              aria-labelledby="Profile Overlay"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              style={
                isDesktop
                  ? {
                      top: "0",
                      left: "0",
                      bottom: "0",
                      right: "0",
                      margin: "auto",
                      zIndex: "99999999",
                      position: "fixed",
                      height: "28em",
                      width: "34em",
                      background: "black"
                    }
                  : {
                      top: "0",
                      left: "0",
                      bottom: "0",
                      right: "0",
                      margin: "auto",
                      zIndex: "99999999",
                      position: "fixed",
                      height: "35em",
                      width: "20em",
                      background: "black"
                    }
              }
            >
              <div
                css={css`
                   {
                    display: flex;
                    flex-direction: column;
                    align-content: space-between;
                    height: 100%;

                    margin-top: 2em;
                  }
                `}
              >
                <div css={textBox}>
                  <img
                    css={css`
                      height: 9em;
                      width: 9em;
                      border-radius: 50%;
                      margin-top: 3em;
                      maring-left: 2em;
                    `}
                    src={img}
                  />

                  <div css={professionName}>
                    <span
                      css={css`
                        font-size: 1.6em;
                        font-weight: bold;
                      `}
                    >
                      {name}
                    </span>
                    <span>{profession}</span>
                  </div>
                </div>
                <div
                  css={css`
                    color: white;
                    height: 17em;
                    text-align: left;
                    margin-left: 4.3em;
                    margin-right: 2rem;
                    font-size: 0.9em;
                    margin-top: 1em;
                    overflow-y: auto;
                    line-height: 1.5em;

                    @media only screen and (max-width: 600px) {
                      height: 30em;
                      margin-left: 2rem;
                    }
                  `}
                >
                  <SanitizedHTML html={text} />
                </div>
                <div
                  css={css`
                    background: gray;
                    height: 1em;
                    width: 100%;
                  `}
                ></div>
              </div>
              <FocusTrap>
                <div>
                  <button
                    css={exitButton}
                    onClick={exitAndPlayAnimation}
                    aria-label="Close"
                    aria-describedby="descriptionClose"
                  >
                    <FontAwesomeIcon size="2x" icon={faTimesCircle} />
                  </button>
                  <button
                    css={printButton}
                    onClick={() => window.print()}
                    aria-label="Print"
                    aria-describedby="descriptionPrint"
                  >
                    <FontAwesomeIcon size="2x" icon={faPrint} />
                  </button>
                </div>
              </FocusTrap>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
