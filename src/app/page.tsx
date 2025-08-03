"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaUserNurse,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Image from "next/image"; // ✅ Added next/image import
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <main className="bg-gradient-to-br from-emerald-200 via-blue-100 to-emerald-400 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-2">
            Hi, I&apos;m Fathima Ijasa
          </h2>
          <p className="text-gray-600">Nursing Officer | undergraduate</p>
          <div className="flex justify-center space-x-4 mt-4 text-xl text-gray-700">
            <a
              href="https://github.com/ijasa1995"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#000000] hover:scale-110"
            >
              <FaGithub className="size-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/fathima-ijaza-65602727a/"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#0077B5] hover:scale-110"
            >
              <FaLinkedin className="size-7" />
            </a>
            <a
              href="mailto:itzijaza@gmail.com"
              className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#EA4335] hover:scale-110"
            >
              <FaEnvelope className="size-7" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen px-6 py-20 items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
            I am a dedicated and compassionate nursing student currently
            pursuing my academic qualifications while actively serving as a
            Nurse Officer. Balancing both roles has enriched my clinical skills
            and deepened my understanding of patient care. My hands-on
            experience in a fast-paced healthcare environment complements my
            theoretical learning, enabling me to apply evidence-based practices
            in real time. I am passionate about continuous learning, patient
            advocacy, and contributing to a healthier community through both my
            studies and professional practice.
          </p>
        </motion.div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="flex items-center justify-center min-h-screen px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
          <ul className="space-y-4 mt-10">
            <li className="bg-emerald-300/50 p-4 rounded-xl shadow transition-all duration-300 hover:drop-shadow-[0_0_6px_#1877F2] hover:scale-110">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">BsC Nursing (Hons)</h3>
                <FaGraduationCap className="text-2xl text-emerald-700 drop-shadow-sm" />
              </div>
              <p className="text-gray-600">
                External 5th Batch, Eastern University of Sri Lanka
              </p>
            </li>

            <li className="bg-emerald-300/50 p-4 rounded-xl shadow transition-all duration-300 hover:drop-shadow-[0_0_6px_#1877F2] hover:scale-110">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Diploma in Nursing</h3>
                <FaUserNurse className="text-2xl text-emerald-700 drop-shadow-sm" />
              </div>
              <p className="text-gray-600">College of Nursing, Ampara</p>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex min-h-screen px-6 py-20 items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row max-w-4xl mx-auto gap-10"
        >
          {/* Left: Photo */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/images/profile.png"
              alt="My Photo"
              width={320}
              height={320}
              className="w-80 h-80 object-cover rounded-full border border-gray-300 shadow-2xl shadow-emerald-950"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-gray-700 pl-20">
            <div>
              <h3 className="text-4xl font-semibold">Fathima Ijasa</h3>
              <p className="text-sm">Nursing officer | Undergraduate</p>
            </div>
            <div className="text-lg space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> Kalmunai, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> itzijaza@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> +94 76 715 0938
              </p>
            </div>
            <div className="flex space-x-6 text-2xl text-gray-700">
              <a
                href="https://github.com/ijasa1995"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#000000] hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fathima-ijaza-65602727a/"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#0077B5] hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:itzijaza@gmail.com"
                className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#EA4335] hover:scale-110"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/quinirizath"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#E1306C] hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/quinirizath"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:drop-shadow-[0_0_6px_#1877F2] hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
