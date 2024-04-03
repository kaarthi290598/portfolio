"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import ColourButton from "./ui/ColourButton";
import toast from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (!email || !description) {
      setError("Please fill in all fields");
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",

        body: JSON.stringify({ email, description }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
      setError("");
      setSuccess("");
      setEmail("");
      setDescription("");
    }
  };

  return (
    <section
      className=" flex flex-col items-center padding-container gap-10 max-container  mt-20   "
      id="contact"
    >
      <h1 className=" black_gradient head_text text-center z-30  ">Contact</h1>
      <form
        className="z-30 flex flex-col gap-5 justify-center  items-center w-full md:w-[28rem]   "
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          label="Email"
          variant="bordered"
          className=" border-gray-800"
          value={email}
          onValueChange={(value) => setEmail(() => value)}
          disabled={isLoading}
        />
        <Textarea
          label="Description"
          variant="bordered"
          placeholder="Share me your idea"
          className=" border-gray-800"
          value={description}
          onValueChange={(value) => setDescription(() => value)}
          disabled={isLoading}
        />
        <ColourButton
          className="w-full hover:rotate-0"
          color="black"
          disabled={isLoading}
        >
          Submit
        </ColourButton>
      </form>
    </section>
  );
};

export default Contact;
