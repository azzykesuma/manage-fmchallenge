const Features = () => {
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
    <section className="mt-8">
      <div>
        <h2 className="text-3xl text-dark-blue font-extrabold text-center mb-4">
          What's different about Manage?
        </h2>
        <p className="text-center text-dark-grayish-blue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4 mt-8">
            <h3 className="text-lg border-red-100 text-dark-blue font-extrabold bg-very-pale-red rounded-3xl w-[calc(100%+2rem)] ">
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
