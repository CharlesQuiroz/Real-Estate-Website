"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE: Map + Contact Info */}
        <div className="flex flex-col space-y-6">
          {/* Map */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019490589727!2d-122.4194151846814!3d37.77492927975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4c0b6b21%3A0x4b5a6dba593e9e6!2sSubdivision%20Main%20Entrance!5e0!3m2!1sen!2sus!4v1692273472682!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Contact Details</h2>
              <a
                href="https://wa.me/12069196886" // WhatsApp link with country code
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.926 7.926 0 0 0 8.002.002a7.926 7.926 0 0 0-5.6 2.324A7.9 7.9 0 0 0 .002 7.923c0 1.397.365 2.76 1.06 3.975L0 16l4.185-1.09a7.9 7.9 0 0 0 3.817.97h.003c4.368 0 7.94-3.57 7.94-7.977a7.9 7.9 0 0 0-2.344-5.577zM8.002 14.7a6.8 6.8 0 0 1-3.48-.95l-.249-.15-2.481.647.662-2.418-.162-.249a6.8 6.8 0 0 1-1.057-3.6c0-3.75 3.056-6.8 6.8-6.8a6.8 6.8 0 0 1 4.807 1.994 6.77 6.77 0 0 1 1.993 4.805c0 3.75-3.057 6.8-6.833 6.8zm3.722-5.083c-.203-.101-1.203-.592-1.39-.66-.186-.07-.322-.102-.458.101-.136.203-.523.66-.64.796-.118.136-.237.152-.44.051-.203-.101-.856-.316-1.63-1.008-.603-.537-1.011-1.2-1.129-1.403-.118-.203-.013-.313.088-.414.09-.089.203-.237.305-.355.102-.118.136-.203.204-.34.067-.136.034-.255-.017-.355-.051-.101-.458-1.106-.627-1.515-.165-.398-.333-.344-.458-.35-.118-.006-.254-.007-.39-.007s-.356.051-.542.255c-.186.203-.711.694-.711 1.694s.728 1.963.83 2.101c.102.136 1.432 2.19 3.47 3.071.485.209.864.334 1.159.428.487.155.93.134 1.28.081.39-.058 1.203-.492 1.373-.968.169-.475.169-.881.118-.968-.051-.085-.186-.136-.39-.237z" />
                </svg>
                Message Us
              </a>
            </div>

            <p className="mb-2">
              <span className="font-semibold">Address:</span> 3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> (206) 919-6886
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> marci.metzger@example.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Office Hours:</span> Mon - Sun: 8AM - 7PM
            </p>
            <p className="mb-2">
              <span className="font-semibold">Appointments outside of office hours are available upon request.</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Send Message Form */}
        <div className="bg-base-100 p-6 rounded-lg shadow flex flex-col">
          <h1 className="text-3xl text-center font-extrabold mb-6 tracking-wide font-serif text-base-content">
            CALL OR VISIT US!
          </h1>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full h-70"
            ></textarea>
            <div className="flex justify-center">
              <button className="btn btn-primary px-8 rounded-full text-base-200 hover:bg-neutral w-full">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
