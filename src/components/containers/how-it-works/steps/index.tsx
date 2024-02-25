import Step from "../step";

const component = () => {
  const steps = [{
    title: "Take the quiz",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    children: (<div className="p-4">
      <ul>
        <li>Point one</li>
        <li>One more</li>
        <li>Test second</li>
      </ul>
    </div>
    )
  }, {
    title: "Get your results",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    children: (<div className="p-4">
      <ul>
        <li>Point one</li>
        <li>One more</li>
        <li>Test second</li>
      </ul>
    </div>
    )
  }, {
    title: "Start your journey",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.`,
    children: (<div className="p-4">
      <ul>
        <li>Point one</li>
        <li>One more</li>
        <li>Test second</li>
      </ul>
    </div>
    )
  }];

  return (
    steps.map((step, index) => (
    <Step key={index} index={index + 1} title={step.title} description={step.description}>
      {step.children}
    </Step>
    ))
  );
};

export default component;
