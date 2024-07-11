import useIsMobile from "../hooks/useIsMobile";

const Features = () => {
  const {isMobile} = useIsMobile()
  const features = [
    {
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced built-in reports",
      desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <section className={`mt-8 ${isMobile ? undefined : 'flex justify-between'}`}>
      <div className={ `mb-8 ${isMobile ? 'text-center' : 'text-left basis-4/12'}`}>
        <h2 className="text-3xl text-dark-blue font-extrabold  mb-4">
          What's different about Manage?
        </h2>
        <p className=" text-dark-grayish-blue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className={`${isMobile ? undefined : 'basis-4/12'}`}>
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col gap-4 mb-8`}>
            <h3 className={`${isMobile ? ' w-[calc(100%+2rem)] bg-very-pale-red' : 'transform -translate-x-[4.4rem]'}  text-lg border-red-100 text-dark-blue font-extrabold  rounded-3xl`}>
              <span className="bg-bright-red text-white rounded-2xl py-1 px-4 mr-4">0{index + 1}</span>
              {feature.title}
            </h3>
            <p className="text-dark-grayish-blue">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
