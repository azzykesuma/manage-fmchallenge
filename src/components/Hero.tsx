import illu from "../assets/images/illustration-intro.svg";
import useIsMobile from "../hooks/useIsMobile";
import Button from "./ui/Button";

const Hero = () => {
  const {isMobile} = useIsMobile();
  return (
    <section className={`mt-8 ${!isMobile ? 'flex flex-row-reverse justify-between' : undefined}`}>
      <img src={illu} alt="illustration by manage " className={`${isMobile ? undefined : 'basis-4/12'}`} />
      <div className={`flex flex-col justify-center gap-4  ${isMobile ? 'text-center' : 'basis-4/12 text-left'}`}>
        <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} text-dark-blue font-extrabold`}>Bring everyone together to build better products.</h1>
        <p className="text-dark-grayish-blue">
          {" "}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className={`bg-bright-red text-white w-[200px] ${isMobile ? 'mx-auto' : undefined}`}>Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
