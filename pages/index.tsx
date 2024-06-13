import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Pablo&apos;s Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Pablo's Portfolio" name="title" />
        <meta content="Explore Pablo's skills as a Fullstack developer with React, React Native, NextJS and Python." name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://pablo-montes-portfolio.vercel.app" property="og:url" />
        <meta content="Pablo's Portfolio" property="og:title" />
        <meta content="Explore Pablo's skills as a Fullstack developer with React, React Native, NextJS and Python." property="og:description" />
        <meta content="https://pablo-montes-portfolio.vercel.app/images/welcome-screen.png" property="og:image" />

        {/* <!-- Twitter --> */}
        <meta content="https://pablo-montes-portfolio.vercel.app/images/welcome-screen.png" property="twitter:card" />
        <meta content="https://pablo-montes-portfolio.vercel.app" property="twitter:url" />
        <meta content="Pablo Montes - Portfolio" property="twitter:title" />
        <meta content="Explore Pablo's skills as a Fullstack developer with React, React Native, NextJS and Python." property="twitter:description" />
        <meta content="https://pablo-montes-portfolio.vercel.app/images/welcome-screen.png" property="twitter:image" />

        {/* <!-- Other Meta Tags --> */}
        <meta content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react native developer, react native developer in Bolivia, react native developer remote, react native developer in Latam, react native developer" name="keywords" />
        <meta content="Pablo Montes" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link href="https://pablo-montes-portfolio.vercel.app/favicon.ico" rel="icon" type="image/x-icon" />

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
