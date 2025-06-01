import './About.css'

const About = () => {
  return (
    <section className='about'>
      <h2 className='about-text'>About this Project</h2>
      <p className='about-p'>
        Hi, my name is Lars, and I am the creator of this web project dedicated
        to the life and works of
        <span className='highlight'> Antoni Gaudí.</span> <br />
        <br />
        As both an architect and web developer, I created this web project as a
        tribute to one of the most visionary minds in architecture—Antoni Gaudí.
        His ability to merge nature, structure, and spirit into forms that feel
        both eternal and organic has long inspired me. <br />
        <br />
        This platform is a digital space where you can explore Gaudí's
        architectural legacy through curated visuals, insights, and details that
        aim to capture the essence of his genius. My goal is not just to inform
        but to evoke the same sense of awe I felt when first encountering his
        work. <br />
        <br />
        <span className='highlight'> Gaudí</span> reminds us that architecture
        can be a form of poetry—and this site is my way of sharing that poetry
        with the world.
      </p>
    </section>
  )
}

export default About
