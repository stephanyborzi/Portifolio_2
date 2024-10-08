import About from "../Components/About";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
