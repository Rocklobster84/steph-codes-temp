"use client";

import { useState } from 'react';
import { FormCard } from "./form-elements/FormCard"
import { FormLabel, TextInput } from "./form-elements/FormLabel"
import { TextArea } from "./form-elements/TextArea"
import { FieldRow } from './form-elements/FieldRow';

const ContactForm = () => {

const [first, setFirst] = useState("");
const [firstError] = useState("");  
const [last, setLast] = useState("");
const [lastError] = useState("");
const [email, setEmail] = useState("");
const [emailError] = useState("");
const [message, setMessage] = useState("");
const [messageError] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Simulate async submit (e.g. API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Clear fields, show success, etc.
  } finally {
    setIsSubmitting(false);
  }
};

  return (
   <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
      <div className="shrink-0 self-end max-w-full h-0 border-white border-solid border-[1px] w-full sm:px" />
      <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[80px] md:w-[137px]">
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[168px] w-[1px]" />
            <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[168px] w-[1px]" />
          </div>
          <div className="flex flex-col self-end w-full max-w-[1325px] max-md:max-w-full">
            <div className="titles self-start text-4xl font-bold text-white md:max-w-full md:text-6xl mt-10 uppercase">
              Hire Me
            </div>
            <div className="self-start mt-3 text-2xl text-white md:max-w-full md:text-4xl uppercase">
              TODO: SUBTITLE
            </div>  

          </div>
        </div>
      </div>
    
            

    <div className="flex justify-center mt-10">
      <FormCard
        title="Contact Me"
        description="I usually reply within 24 hours."
        submitting={isSubmitting}
        onSubmit={handleSubmit}  
      >
      <FieldRow>
        <div className="flex flex-col w-full">
        <FormLabel htmlFor="first">First Name</FormLabel>
        <TextInput
          id="first"
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
          error={firstError}
        />
        </div>
        <div className="flex flex-col w-full">
        <FormLabel htmlFor="last">Last Name</FormLabel>
        <TextInput
          id="last"
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
          error={lastError}
        />
        </div>
      </FieldRow>
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <TextInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        error={emailError}
      />
      <FormLabel htmlFor="Comments">Comments</FormLabel>
      <TextArea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        required
        error={messageError}
      />
      </FormCard>
    </div>

    </div>
  )
}

export default ContactForm