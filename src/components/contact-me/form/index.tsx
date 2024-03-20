import Button from "@/components/shared/Button";
import Input from "./input";
import Textarea from "./textarea";
import { submitRequest } from "@/app/(site)/(home)/action";
import config from "@/app/app.config";

const component = () => {
  const { dict } = config;

  return (
    <form
      action={submitRequest}
      className="grid gap-y-6 grid-cols-1 
      
      "
    >
      <Input
        // className="sm:col-start-1 sm:col-end-2 sm:row-span-1 
        // lg:row-auto lg:col-auto"
        name="firstName"
        label={dict.contactForm.name.label}
        placeholder={dict.contactForm.name.placeholder}
        focus
        focusDelay={1000}
      />
      <Input
        // className="sm:col-start-1 sm:col-end-2 sm:row-span-1 
        // lg:row-auto lg:col-auto"
        name="howToReach"
        label={dict.contactForm.howToReach.label}
        placeholder={dict.contactForm.howToReach.placeholder}
      />
      <Textarea
        // className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 
        // lg:row-auto lg:col-auto"
        name="message"
        label={dict.contactForm.message.label}
        placeholder={dict.contactForm.message.placeholder}
      />
      <div 
      // className="sm:flex sm:justify-end sm:row-span-1 sm:col-span-2 
      //   lg:row-auto lg:col-auto"
        >
        <Button type="submit" size="sm" variant="primary">
          {dict.contactForm.submit}
        </Button>
      </div>
    </form>
  );
};

export default component;
