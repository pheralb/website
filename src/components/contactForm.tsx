import { useState } from "react";
import { z } from "zod";

const ContactForm = () => {
  // Form Data =>
  const FormData = z.object({
    name: z.string().min(1).max(18),
    email: z.string().email(),
    url: z.string().url().optional(),
  });

  const validateFormData = (inputs: unknown) => {
    const isValidData = FormData.parse(inputs);
    return isValidData;
  };

  const sendEmail = () => {
    try {
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return <form className="flex flex-col space-y-4"></form>;
};

export default ContactForm;
