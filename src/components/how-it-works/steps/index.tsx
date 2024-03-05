import Step from "../step";

const component = () => {
  const steps = [
    {
      title: "Take the quiz",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    },
    {
      title: "Get your results",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    },
    {
      title: "Start your journey",
      description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    },
  ];

  return (
    <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
      {steps.map((step, index) => (
        <Step
          key={index}
          index={index}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
};

export default component;
