import About from "../components/about/About";
import Catalog from "../components/catalog/Catalog";
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const Home = () => {
  return ( 
    <>
      <Header />
      <Catalog/>
      <About/>
      <Contact />
      <Footer/>
    </>
   );
}
 
export default Home;