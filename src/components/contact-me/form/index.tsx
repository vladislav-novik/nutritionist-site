import Button from "@/components/shared/Button";
import Input from "./input";
import Textarea from "./textarea";
import { submitRequest } from "@/app/(site)/(home)/action";
import config from "@/app/app.config";

const component = () => {
  const { dict } = config;

  return (
    <form action={submitRequest} className="grid gap-y-6 grid-cols-1">
      <Input
        name="firstName"
        label={dict.contactForm.name.label}
        placeholder={dict.contactForm.name.placeholder}
        focus
        focusDelay={1000}
      />
      <Input
        name="howToReach"
        label={dict.contactForm.howToReach.label}
        placeholder={dict.contactForm.howToReach.placeholder}
      />
      <Textarea
        name="message"
        label={dict.contactForm.message.label}
        placeholder={dict.contactForm.message.placeholder}
      />
      <Button type="submit" size="sm" variant="primary">
        {dict.contactForm.submit}
      </Button>
    </form>
  );
};

export default component
