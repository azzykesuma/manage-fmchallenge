import Button from "./ui/Button";

const isMobile = window.innerWidth < 768;

const FooterCta = () => {
  return (
    <section
      className={`bg-bright-red h-80 flex flex-col gap-6 items-center justify-center relative 
    ${
      isMobile ? "bg-pattern-mobile" : "bg-pattern-desktop"
    } bg-no-repeat bg-contain bg-left-top-50`}
    >
      <h3 className="text-[30px] max-w-60 text-center font-bold text-white">
        Simplify how your team works today.
      </h3>
      <Button className="bg-white text-bright-red">Get Started</Button>
    </section>
  );
};

export default FooterCta;
