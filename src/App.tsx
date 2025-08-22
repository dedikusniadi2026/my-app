import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/Aboutus";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Princing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="Edge">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;