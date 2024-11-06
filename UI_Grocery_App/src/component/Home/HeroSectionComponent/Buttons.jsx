import React from "react";

import NeuPass from "../../../assets/images/NeuPass.png";

function Buttons() {
  return (
    <section className="flex gap-[27px] mt-8">
      <div>
        <button className="h-[53px] w-[167px] bg-[#E8E8E8] rounded-md PY-2 px-6 font-extrabold text-sm">
          {" "}
          EGGS,MEAT AND FISH
        </button>
      </div>
      <div>
        <button className="h-[53px] w-[167px] bg-[#1B0F2E] rounded-md p-2 font-extrabold text-sm">
          {" "}
          <img src={NeuPass} alt="NeuPass" className="contain-content" />
        </button>
      </div>
      <div>
        <button className="h-[53px] w-[167px] bg-[#4C6020]  text-white rounded-md PY-2 px-6 font-extrabold text-sm">
          {" "}
          AYURVEDA
        </button>
      </div>
      <div>
        <button className="h-[53px] w-[167px] bg-[#E8E8E8] rounded-md PY-2 px-6 font-extrabold text-sm">
          Buy MORE SAVE MORE{" "}
        </button>
      </div>
      <div>
        {" "}
        <button className="h-[53px] w-[167px] bg-[#E8E8E8] rounded-md PY-2 px-6 font-extrabold text-sm">
          {" "}
          DEALS OF THE WEAK
        </button>
      </div>

      <div>
        {" "}
        <button className="h-[53px] w-[167px] bg-[#E8E8E8] rounded-md PY-2 px-6 font-extrabold text-sm">
          {" "}
          COMBO STORE
        </button>
      </div>
    </section>
  );
}

export default Buttons;
