import React from "react";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl p-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 text-center uppercase tracking-[20px]  text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 mt-20">
        <h4 className="text-[20px] md:text-2xl font-semibold text-center">
          Let me work for you, contact me <br />
          <span className="decoration-[#898989]/50 underline">Let's talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#898989] h-7 w-7 animate-pulse" />
            <p className="text-[20px] md:text-2xl">+234 916 322 6590</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#898989] h-7 w-7 animate-pulse" />
            <p className="text-[20px] md:text-2xl">okerekeifeany65@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#898989] h-7 w-7 animate-pulse" />
            <p className="text-[20px] md:text-2xl">Lagos, Nigeria</p>
          </div>{" "}
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            window.location.href = `mailto:okerekeifeanyi65@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.Message}(${data.email})`;
          })}
          className="flex flex-col space-y-1 md:space-y-2  w-fit mx-auto"
        >
          <div className="flex space-x-1 md:space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("Message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#898989] text-white text-[20px] rounded-md md:text-2xl font-semibold py-5 px-30"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
