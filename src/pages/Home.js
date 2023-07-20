import React from "react";
import NaveBar from "../components/Navbar";
import RightSide from "../components/RightSide";
import SideLeft from "../components/SideLeft";
import Stories from "../components/Stories";
import Status from "../components/Status";

const HomePage = () => {
  return (
    <>
      <NaveBar />
      <div className="bg-[#cccccc]">
        <div class="flex">
          <div class="w-1/4 bg-white p-4 rounded-lg shadow">
            <SideLeft />
          </div>
          <div class="w-1/2 bg-white p-4 rounded-lg shadow mx-4">
            {/* <!-- Add your post feed and other content here --> */}
            <Stories />
            <Status />
          </div>
          <div class="w-1/4 bg-white p-4 rounded-lg shadow">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
