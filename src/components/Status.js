import React from "react";

const Status = () => {
  return (
    <div>
      <div class="w-4/5  bg-blue-200 p-4 rounded-lg shadow mx-auto mt-4">
        <div>Abbas</div>
        <hr className="border-t border-gray-300 my-4 w-full" />
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <div>image</div>
            <div>Stories</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>image</div>
            <div>Reels</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>image</div>
            <div>Rooms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
