import Container from "@/components/Container";
import HomeDescripton from "@/components/HomeDescripton";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Mithul Pranav
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescripton />
            </div>
          </div>
          {/* <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
             Enthusiastic and results-oriented Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
Seeking an entry-level position to utilize my skills in building 
scalable and efficient web applications.
          </p> */}
{/* Button wrapped in anchor tag for download */}
<a href="/resume.pdf" download>
          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect">
            Download cv <Download />
          </Button>
          </a>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
}
