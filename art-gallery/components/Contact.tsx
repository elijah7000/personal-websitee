"use client";
import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_dge7fua",
          "template_rd0vhre",
          form.current,
          "V1CwTxKMwNBHsxLOa"
        )
        .then(
          (result) => {
            alert("Email succesfully sended");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form ref is null");
    }
  };

  return (
    <div className="h-full flex flex-col lg:flex-row lg:mt-20 border-t border-t-white border-solid ">
      <div className="flex-[1] lg:flex-[2] flex justify-center relative ">
        <Image
          src={"/BusyCity.png"}
          alt="Contact Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex-[2.5] flex flex-col w-full ">
        <div className="flex flex-col items-end text-[8vw] md:text-5xl lg:text-5xl p-5 border-b border-solid border-b-white">
          <div className="flex flex-col items-end ">
            <h1 className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/lydia-kim-1ba632b0/">
                Linkin
              </Link>
            </h1>
            <h1>LydiaKim@gmail.com</h1>
          </div>
          <div className="flex flex-col items-end mt-10 ">
            <h1 className="cursor-pointer">
              <Link href="https://www.instagram.com/lydia_j_kim/">
                Instagram
              </Link>
            </h1>
            <h1>Twitter</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl pl-4 pt-5">
              Drop a Message +
            </h1>
            <div className="flex justify-center items-center md:ml-10 mt-5 p-5">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="text-black w-full flex flex-col "
              >
                <textarea
                  name="message"
                  className=" text-black md:w-[90%] md:h-[300px] lg:text-2xl h-[200px] "
                />
                <input
                  type="submit"
                  value="Send"
                  className=" text-white lg:text-5xl md:text-3xl text-xl text-right mr-5 mt-5 cursor-pointer"
                />
              </form>
            </div>
          </div>
          <div className="flex w-full md:justify-end justify-center mb-10">
            <h1 className="text-[25vw] md:text-[25vw] lg:text-[15vw] ">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
