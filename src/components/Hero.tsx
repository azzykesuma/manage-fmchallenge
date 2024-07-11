import illu from "../assets/images/illustration-intro.svg";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="mt-8">
      <img src={illu} alt="illustration by manage" />
      <div className="flex flex-col justify-center gap-4 text-center">
        <h1 className="text-4xl text-dark-blue font-extrabold">Bring everyone together to build better products.</h1>
        <p className="text-dark-grayish-blue">
          {" "}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className="bg-bright-red text-white w-[200px] mx-auto">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
