import React from "react";
import CardSm from "../../../Small_component/Cards/CardSm";

function Beverages() {
  return (
    <section className="mt-8">
      <div className="h-[46px]">
        <h1 className="text-2xl  font-bold">Beverages</h1>
      </div>
      <div className="flex gap-7 ">
        <CardSm
          type="Health Drinks "
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/w7tvighygoqwcqgotqbt.png"
          offer="UPTO 20% OFF"
        />

        <CardSm
          type="Tea & Coffee"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/ll9dhlmqq0xab4nkllhe.png"
          offer="UPTO 40% OFF"
        />
        <CardSm
          type="Flavoured & Soya Milk"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/ltonuf8os4u4fonoxpwm.png"
          offer="UPTO 30% OFF"
        />
        <CardSm
          type="Juices"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/fzfpneaxywdoigrds9te.png"
          offer="UPTO 30% OFF"
        />
        <CardSm
          type="Energy Drinks"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/amlwoofqr8ouw94zjzie.png"
          offer="UPTO 15% OFF"
        />
        <CardSm
          type="Soft Drinks"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920737/jbv41oy15p2nxd6vp7wk.png"
          offer="UPTO 15% OFF"
        />
      </div>
    </section>
  );
}

export default Beverages;
