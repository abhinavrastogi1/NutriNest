import React from "react";
import CardSm from "../../../Small_component/Cards/CardSm";

function BeautyAndHygiene() {
  return (
    <section className="mt-8">
      <div className="h-[46px]">
        <h1 className="text-2xl  font-bold">Beauty & Hygiene</h1>
      </div>
      <div className="flex gap-7 ">
        <CardSm
          type="MakeUp Show Stoppers "
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921451/kohiddctkhj4tdeseekg.png"
          offer="UPTO 60% OFF"
        />{" "}
        <CardSm
          type="Moisturisers & Serums "
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921452/k6hhzow3ngr4prb3wyq8.png"
          offer="UPTO 40% OFF"
        />{" "}
        <CardSm
          type="Scentsational Perfumes"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921452/k3ylizjjp9umooceluzl.png"
          offer="UPTO 50% OFF"
        />{" "}
        <CardSm
          type="Shaving Care "
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921452/rund3itsqh1rsannrbdq.png"
          offer="UPTO 50% OFF"
        />{" "}
        <CardSm
          type="Facial Mask "
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921452/khjyabo1whk6t4hicrli.png"
          offer="MINIMUM 30% OFF"
        />{" "}
        <CardSm
          type="Big Pack Bigger Saving"
          img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730921452/ttmezvw1vj5j38jyxiad.png"
          offer="UPTO 50% OFF"
        />
      </div>
    </section>
  );
}

export default BeautyAndHygiene;
