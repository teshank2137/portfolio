import { Suspense } from "react";
import Contact3d from "../sections/Contact3d";
import ContactForm from "../sections/ContactForm";
import StyledContact from "./styles/StyledContact";

const ContactPage = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(text[i]);
    }
    return spans;
  };
  return (
    <StyledContact>
      <h1 className="contact-title">
        {getSpans("Contact me").map((e, i) => (
          <span className="t" key={i}>
            {e}
          </span>
        ))}
      </h1>
      <div className="contact-contents">
        <ContactForm />
        <Suspense fallback={<div>Loading...</div>}>
          <Contact3d />
        </Suspense>
      </div>
    </StyledContact>
  );
};

export default ContactPage;
