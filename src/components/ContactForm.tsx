import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gray-50 p-6 font-inter"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-4xl font-bold xs:text-3xl sm:mb-2">
          Contact Me
        </h2>
        <p className="mb-8 text-xl text-gray-600 xs:text-lg sm:mb-4">
          How to get in touch
        </p>

        <div className="flex flex-row gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-12">
          {/* Contact Information */}
          <div className="w-full space-y-8 sm:w-2/5">
            <div className="flex items-center">
              <Phone className="mr-4 h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold xs:text-lg">Mobile</h3>
                <span className="text-gray-600 xs:text-sm">
                  +61 424 833 056
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold xs:text-lg">Email</h3>
                <a
                  href="mailto:annisanye@outlook.com"
                  className="text-gray-600 transition-colors hover:text-blue-500 xs:text-sm"
                >
                  annisanye@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4 h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold xs:text-lg">Location</h3>
                <span className="text-gray-600 xs:text-sm">
                  Melbourne, Victoria
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter full name"
                    className="w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter a subject line"
                  className="w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full rounded-md border border-gray-300 bg-blue-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
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
