import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  if (showModal) {
    return (
      <div className=" bg-[#ffffffcc] opacity-1 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="bg-white max-w-md w-full p-4 shadow-xl">
          <>
            {/* header */}
            <div className="w-auto  p-4 rounded">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-3xl">Sign Up</h2>
                  <p className="text-[#606770] text-[15px]">
                    Its's quick and easy
                  </p>
                </div>
                <div>
                  <img
                    onClick={() => setShowModal(false)}
                    className="w-8 h-8 cursor-pointer"
                    src="/assest/login/close.svg"
                  />
                </div>
              </div>
              <hr className="w-full mt-4 my-4 border-gray-300" />
            </div>
            {children}
          </>
        </div>
      </div>
    );
  }
};

export default Modal;
