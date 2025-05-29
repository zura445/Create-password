import React from "react";

function Range() {
  return (
    <div>
      <div className="bg-black-700 mt-6 px-8 pb-8 pt-6">
        <div className="flex justify-between items-center">
          <p className="text-white text-lg">Character Length</p>
          <p className="text-3xl font-bold text-green-200">10</p>
        </div>
        <input
          type="range"
          min={0}
          max={10}
          className="w-full mt-4 bg-green-200"
        />
      </div>
    </div>
  );
}

export default Range;
