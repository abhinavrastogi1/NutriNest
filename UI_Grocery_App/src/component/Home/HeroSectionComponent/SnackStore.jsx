import React from "react";
import CardMd from "../../../Small_component/Cards/CardMd";

function SnackStore() {
  return (
    <section className="mt-8">
      <div className="h-[46px]">
        <h1 className="text-2xl  font-bold">Snack Store</h1>
      </div>
      <div className="flex gap-7">
        <div>
          <CardMd
            type="Chai Time Snack"
            offer="MIN 50% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730918232/y1julwaetqdfpxjadctu.png"
          />
        </div>
        <div>
          <CardMd
            type="Morning Starters"
            offer="MIN 50% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730918181/usyeekpcaa8bqy7wfeey.png"
          />
        </div>
        <div>
          <CardMd
            type="Pasta,Sauces & More"
            offer="MIN 40% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730918173/oe8y8rno8en3ceytqec9.png"
          />
        </div>
        <div>
          <CardMd
            type="Sweet Cravings"
            offer="MIN 40% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730918158/qwoxe2mbca9nzinauwlr.png"
          />
        </div>
      </div>
    </section>
  );
}

export default SnackStore;
