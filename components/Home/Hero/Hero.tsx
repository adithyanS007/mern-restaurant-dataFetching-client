import React from "react";

const Hero = () => {
    return (
        <div>
            <section className="relative w-full mt-[100px]">
                {/* Background image with linear gradient */}
                <div
                    className="absolute inset-0 bg-cover bg-center w-full lg:h-[70vh] h-screen "
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.71) 100%), url('/images/deepnetsofthero.jpeg')",
                    }}
                ></div>

                {/* Your content goes here  */}
                <div className="relative z-10 text-white flex justify-center flex-col items-center h-full">
                    <h1 className="text-4xl font-bold pt-20 text-center">Your Hero Section Text</h1>
                    <p className="w-[70%] pt-10 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis dicta, tenetur expedita perspiciatis eum aliquid pariatur optio aut inventore ab natus facilis tempora vitae iure atque deleniti quasi blanditiis dignissimos omnis reprehen earum?</p>
                </div>
            </section>
            
        </div>
    );
};

export default Hero;

