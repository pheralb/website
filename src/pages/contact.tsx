import React from "react";

import PageSection from "@/components/pageSection";
import CustomContainer from "@/ui/container";
import ContactForm from "@/components/contactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <CustomContainer>
      <PageSection title="Contact" />
      <ContactForm />
    </CustomContainer>
  );
};

export default Contact;
