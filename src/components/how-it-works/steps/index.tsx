import Step from "../step";
import config from "@/app/app.config";

const component = () => {
  const { steps } = config.dict.sections.howItWorks

  return (
    <div className="mt-16 space-y-16 md:mt-24 md:space-y-36">
      {steps && steps.map((_, index) => (
        <Step
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default component;
