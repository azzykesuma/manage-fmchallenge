import useIsMobile from "../hooks/useIsMobile";
import Button from "./ui/Button";

const FooterCta = () => {
  const { isMobile } = useIsMobile();
  const mobileClasses = "bg-pattern-mobile flex-col h-80 gap-6 bg-contain bg-left-top-50";
  const desktopClasses =
    "bg-pattern-desktop h-40 flex-row items-center justify-between px-28";
  return (
    <section
      className={`bg-bright-red flex items-center justify-center relative bg-no-repeat  ${
        isMobile ? mobileClasses : desktopClasses
      }`}
    >
      <h3
        className={`text-[30px] font-bold text-white ${
          isMobile ? "max-w-60 text-center" : "max-w-[350px] text-left"
        }`}
      >
        Simplify how your team works today.
      </h3>
      <Button className="bg-white text-bright-red">Get Started</Button>
    </section>
  );
};

export default FooterCta;
