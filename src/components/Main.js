// the bulk of the app is here
import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume
 from './Resume';
// using refs to scroll to sections
function Main({refs}) {
  return (
    <main>
        <section><Hero /></section>
      <section id="about" ref={refs.about}><AboutMe /></section>
      <section id="portfolio"  ref={refs.portfolio}><Portfolio /></section>
      <section id="contact" ref={refs.contact}><Contact /></section>
        <section id="resume" ref={refs.resume}><Resume /></section>
    </main>
  );
}

export default Main;