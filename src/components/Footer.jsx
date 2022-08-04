import React from 'react'
import styleFooter from '../assets/scss/components/footer.module.scss'
import { FaReact } from 'react-icons/fa'
import { DiGithubAlt } from 'react-icons/di'
import { FiCodesandbox } from 'react-icons/fi'
import { SiNetlify, SiW3C } from 'react-icons/si'

const Footer = () => {
  return (
    <>
      <footer className={styleFooter.bg}>
        <div className={styleFooter.colWrap}>
          <div className={styleFooter.cols}>
            <p className={styleFooter.item}>
              <FaReact
                size="2em"
                title="Game Engineering & Design by Danny Englander"
              />
              <a
                href="https://www.dannyenglander.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Game Engineering & Design by Danny Englander
              </a>
            </p>

            <p className={styleFooter.item}>
              <SiW3C size="2.3em" title="Github Project" />
              <a
                href="https://www.w3.org/WAI/WCAG2AAA-Conformance"
                title="Explanation of WCAG 2 Level AAA conformance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level AAA conformance, W3C WAI
                <br />
                Web Content Accessibility Guidelines 2.1
              </a>
            </p>
          </div>

          <div className={styleFooter.cols}>
            <p className={styleFooter.item}>
              <FiCodesandbox size="2em" title="Deployed on CodeSandbox" />
              <a
                href="https://codesandbox.io/s/github/danny-englander/dannys-trivia-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed on CodeSandbox
              </a>
            </p>
            <p className={styleFooter.item}>
              <SiNetlify size="2em" title="Deployed on Netlify" />
              <a
                href="https://trivia-land.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed on Netlify
              </a>
            </p>

            <p className={styleFooter.item}>
              <DiGithubAlt size="2.3em" title="Github Project" />
              <a
                href="https://github.com/danny-englander/react-trivia-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Project
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
