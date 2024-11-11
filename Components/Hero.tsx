import TextEffect from "./TextEffect";

const Hero = () => {
    return (
        <div
            style={{ background: 'linear-gradient(to top, #8C44EF, #1C1132)' }}
            className="h-screen flex justify-start items-center text-white text-center p-40 font-sans" // Apply font-sans here
        >
            {/* Logo with aura effect */}
            <img
                src="/Images/th 1 (1).png" // Adjust the path if necessary
                alt="Logo"
                className="w-[50vh] h-auto object-cover rounded-full transition-all duration-300 ease-in-out relative aura-effect mr-16"
            />

            {/* Main content section */}
            <div className="w-[80%] grid-cols-1 mx-auto gap-[3rem] h-[100%] items-center">
                <div className="mb-[10rem]">
                    <h2 className="text-[25px] md:text-[35px] text-white font-bold cursor-pointer font-mono">
                        HELLO, I'M
                    </h2>
                    <h1 className="text-[35px] md:text-[50px] text-[#A868FF] p-[1rem] font-bold cursor-pointer font-mono">
                        Stephany Borzi Marques
                    </h1>
                    {/* TextEffect component for dynamic text styling */}
                    <TextEffect />
                    <div className="p-[3rem] rounded-full">
                        <a href="/path/to/your/cv.pdf">
                            <button className="bg-[#411083] text-white px-6 py-3 rounded-full hover:bg-[#8C44EF] transition duration-200 cursor-pointer font-mono">
                                Download CV
                            </button>
                        </a>
                        <a href="mailto:your-email@example.com" className="ml-6">
                            <button className="border-2 border-white text-white bg-transparent px-6 py-3 rounded-full hover:bg-white hover:text-[#411083] transition duration-200 cursor-pointer font-mono">
                                Contact Info
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
