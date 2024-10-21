import { useState } from "react";
import Image from "next/image";
const images = [
  {
    id: 1,
    img: "/assets/images/biryani3.png",
  },
  {
    id: 2,
    img: "/assets/images/biryani5.png",
  },
  {
    id: 3,
    img: "/assets/images/biryani2.png",
  },
];
const HeroSection = () => {
  const [imageId, setImageId] = useState("/assets/images/biryani3.png");

  const bgImage = {
    backgroundImage: "url('/assets/images/vector3.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-out" //AOS (Animate On Scroll) Attributes
            data-aos-duration="400" //
            data-aos-once="true" //
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Foodie
              </span>{" "}
              Zone
            </h1>
            <p className="text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <Image
                width={500}
                height={500}
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={imageId}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {images.map((item) => (
                <Image
                  width={500}
                  height={500}
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(
                      item.id === 1
                        ? "/assets/images/biryani3.png"
                        : item.id === 2
                        ? "/assets/images/biryani5.png"
                        : "/assets/images/biryani2.png"
                    );
                  }}
                  alt="biryani img"
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
