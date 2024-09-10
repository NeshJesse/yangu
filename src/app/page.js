import Image from "next/image";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/experience";
import SocialMediaLinks from '@/components/socials';
import ContactMe from "@/components/contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="block w-full">
      <Navbar/>
      <Header/>
      <ExperienceSection/>
      <Projects/>
      <SocialMediaLinks/>
    </main>
  );
}
