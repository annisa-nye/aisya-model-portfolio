import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full pb-20 font-inter">
      <h2 className="bg-white px-6 py-6 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-2 sm:pl-2 sm:pt-4 sm:text-2xl">
        Contact
      </h2>
      <div className=" mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-row gap-8 xs:flex-col xs:items-start xs:justify-center">
          {/* Contact Information */}
          <div className="w-full space-y-10 xs:space-y-8">
            <div className="flex items-center">
              <Phone className="mr-4 h-8 w-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Mobile</h3>
                <span className=" text-gray-600">
                  +61 424 833 056
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 h-8 w-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:annisanye@outlook.com"
                  className=" text-gray-600 transition-colors hover:text-red-500"
                >
                  annisanye@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className=" mr-4 h-8 w-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <span className=" text-gray-600">
                  Melbourne, Victoria
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-xl font-medium text-gray-700 sm:text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter full name"
                    className=" w-full rounded-md border border-gray-300 bg-red-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xl font-medium text-gray-700 sm:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className=" w-full rounded-md border border-gray-300 bg-red-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className=" mb-1 block text-xl font-medium text-gray-700 sm:text-lg"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter a subject line"
                  className="w-full rounded-md border border-gray-300 bg-red-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" mb-1 block text-xl font-medium text-gray-700 sm:text-lg"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Enter your message"
                  className=" w-full rounded-md border border-gray-300 bg-red-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
