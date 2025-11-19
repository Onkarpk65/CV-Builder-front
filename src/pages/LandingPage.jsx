import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Modal from "../components/Modal";

const Header = ({ setOpenAuthModal }) => {
  return (
    <div className="navbar bg-base-100 shadow-xs">
      <div className="flex-1">
        <a className="text-xl font-bold">CV Builder</a>
      </div>
      <div className="flex-none">
        <button
          onClick={() => {
            setOpenAuthModal(true);
          }}
          className="btn btn-neutral rounded-lg hover:bg-purple-800"
        >
          Login / Signup
        </button>
      </div>
    </div>
  );
};

const Hero = ({
  handleCTA,
  openAuthModal,
  currentPage,
  setCurrentPage,
  setOpenAuthModal,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-20 px-8">
        <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7182ff] to-[#3cff52] animate-text-shine">
              CV Effortlessly
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Craft a standard resume in minutes with our smart and intuitive CV
            builder
          </p>
          <button
            onClick={() => {
              handleCTA();
            }}
            className="btn btn-neutral px-8 py-3 rounded-lg hover:bg-gray-800"
          >
            Get Started
          </button>
        </div>
        {/* <div className="w-full md:w-1/2">
        <img
          src="https://wallpapercat.com/w/full/a/8/7/5815535-3840x2160-desktop-hd-4k-wallpaper-image.jpg"
          alt="Hero image"
          className="w-full rounded-lg"
        />
      </div> */}
      </div>

      <section className="mt-5">
        <h2 className="text-2xl font-bold text-center mb-12">
          Features That Make You Shine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
            <p className="text-gray-600">
              Update your CV sections with live preview and instant formatting.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">Beautiful Template</h3>
            <p className="text-gray-600">
              Choose from modern, professional templates that are easy to
              customize.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
            <p className="text-gray-600">
              Download your CV instantly as a hight-quality PDF with on click.
            </p>
          </div>
        </div>
      </section>

      <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
        Made in India
      </div>

      <Modal
        modalId="auth_modal"
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      >
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
      </Modal>
    </>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <div className="w-full min-h-full bg-white">
      <div className="mx-auto px-2 py-2">
        {<Header setOpenAuthModal={setOpenAuthModal} />}
        {
          <Hero
            handleCTA={handleCTA}
            currentPage={currentPage}
            openAuthModal={openAuthModal}
            setOpenAuthModal={setOpenAuthModal}
            setCurrentPage={setCurrentPage}
          />
        }
      </div>
    </div>
  );
};

export default LandingPage;
