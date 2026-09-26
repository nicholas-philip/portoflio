import Nav from "../Components/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import MyWork from "../pages/MyWork";
import AIEngineering from "../pages/AIEngineering";
import Journey from "../pages/Journey";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Nav />
      <main>
        <Home />
        <About />
        <Services />
        <MyWork />
        <AIEngineering />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
