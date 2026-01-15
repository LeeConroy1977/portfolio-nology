import React, { useState } from "react";

const ContactForm = () => {
  const [inputObj, setInputObj] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validateInput, setValidateInput] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isValidated, setIsValidated] = useState(false);

  const handleInput = (name, value) => {
    setInputObj((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleValidation = (name, value) => {
    setValidateInput((prev) => {
      const updated = {
        ...prev,
        [name]:
          value.length === 0
            ? false
            : name === "email"
            ? emailRegex.test(value)
            : true,
      };

      setIsValidated(
        updated.name === true &&
          updated.email === true &&
          updated.message === true
      );

      return updated;
    });
  };

  const resetInput = () => {
    setInputObj({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputObj);
    resetInput();
    setValidateInput({ name: false, email: false, message: false });
    setIsValidated(false);
  };

  console.log(validateInput);
  return (
    <div className="bg-[#0f2538] w-[46%] rounded-2xl flex flex-col h-[75%] mt-10 items-center justify-start ">
      <h3 className="text-4xl text-[#596ced]   mt-8">Get in Touch</h3>

      <form className=" w-[86%] flex flex-col" action="submit">
        <div className=" mt-4 mb-2 mt-8 flex flex-row items-center justify-start">
          <label
            htmlFor="name"
            className="text-[#cd70d6] text-[1rem] pl-2 font-semibold">
            Name
          </label>
          {validateInput.name && (
            <p className="text-[1rem] text-[#26a56e] ml-auto mr-2 font-semibold">
              Ace
            </p>
          )}
        </div>
        <input
          name="name"
          type="text"
          value={inputObj.name}
          onChange={(e) => {
            handleInput(e.target.name, e.target.value);
            handleValidation(e.target.name, e.target.value);
          }}
          className={`${
            validateInput.name ? "border-[#26a56e]" : " border-[#0f2538]"
          } h-[55px] bg-[#cfeef5] rounded-lg border-4   focus:outline-none focus:ring-0 text-[1.2rem] font-semibold px-6`}
        />
        <div className=" mt-4 mb-2  flex flex-row items-center justify-start">
          <label
            htmlFor="name"
            className="text-[#cd70d6] text-[1rem] pl-2 font-semibold">
            Email
          </label>
          {validateInput.email && (
            <p className="text-[1rem] text-[#26a56e] ml-auto mr-2 font-semibold">
              Amazing
            </p>
          )}
        </div>
        <input
          name="email"
          type="email"
          value={inputObj.email}
          onChange={(e) => {
            handleInput(e.target.name, e.target.value);
            handleValidation(e.target.name, e.target.value);
          }}
          className={`${
            validateInput.email ? " border-[#26a56e]" : " border-[#0f2538]"
          } h-[55px] bg-[#cfeef5] rounded-lg border-4  focus:outline-none focus:ring-0 text-[1.2rem] font-semibold px-6`}
        />
        <div className=" mt-4 mb-2 flex flex-row items-center justify-start">
          <label
            htmlFor="name"
            className="text-[#cd70d6] text-[1rem] pl-2 font-semibold">
            Message
          </label>
          {validateInput.message && (
            <p className="text-[1rem] text-[#26a56e] ml-auto mr-2 font-semibold">
              Awesome
            </p>
          )}
        </div>
        <textarea
          name="message"
          type="text"
          value={inputObj.message}
          onChange={(e) => {
            handleInput(e.target.name, e.target.value);
            handleValidation(e.target.name, e.target.value);
          }}
          className={`${
            validateInput.message ? " border-[#26a56e]" : " border-[#0f2538]"
          } h-[130px] bg-[#cfeef5] rounded-lg border-4  focus:outline-none focus:ring-0 text-[1.2rem] font-semibold px-6`}
        />
      </form>
      <button
        disabled={!isValidated}
        onClick={(e) => handleSubmit(e)}
        className={`${
          isValidated ? "" : "opacity-0"
        } mt-10 px-24 py-3 rounded-lg bg-[#596ced] text-[1.1rem] font-bold text-white cursor-pointer`}>
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
