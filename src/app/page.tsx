import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Featured from "@/components/sections/Featured";
import Steps from "@/components/sections/Steps";
import Testimonial from "@/components/sections/Testimonial";
import People from "@/components/sections/People";
import Contact from "@/components/sections/Contact";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (<><Header /><main id="main"><Hero /><Categories /><Featured /><Steps /><Testimonial /><People /><Contact /><Cta /></main><Footer /></>);
}
