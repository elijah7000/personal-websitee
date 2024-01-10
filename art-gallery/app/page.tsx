import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Instagram from "@/components/Instagram";
import Resume from "@/components/Resume";
import Welcome from "@/components/Welcome";
import Image from "next/image";

//여섯개 색션 welcome - gallery - resume - instagram - contact - goodbye-
export default function Home() {
  return (
    <div>
      <Welcome />
      <Gallery />
      <Instagram />
      <Resume />
      <Contact />
    </div>
  );
}
