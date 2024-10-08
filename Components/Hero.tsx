import TextEffect from "./TextEffect";
const Hero = () => {
    return (
        <div
            style={{ background: 'linear-gradient(to top, #8C44EF, #1C1132)' }}
            className="h-screen flex flex-row justify-center items-start text-white text-center p-40">
            <img src="./Images/Logo.png" alt="Logo" className="w-[50vh] bg-cover bg-center" />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:gid-cols-2 gap[3rem] h-[100%] items-center">
                <div className="mb-[10rem]">
                    <h2 className="text-[25px] md:text-[35px] text-white font-bold">
                        HELLO, I'M
                    </h2>
                    <h1 className="text-[35px] md:text-[50px] text-[#A868FF] p-[1rem] font-bold">
                        Stephany Borzi Marques
                    </h1>
                    <TextEffect />
                    <div className="p-[3rem] rounded-full">
                        <a href="/path/to/your/cv.pdf" >
                            <button className="bg-[#411083] text-white px-6 py-3 rounded-full hover:bg-[#8C44EF] transition duration-200">
                                Download CV
                            </button>
                        </a>
                        <a href="mailto:your-email@example.com" className="ml-6">
                            <button className="border-2 border-white text-white bg-transparent px-6 py-3 rounded-full hover:bg-white hover:text-[#411083] transition duration-200">
                                Contact Info
                            </button>
                        </a>
                        <div className="flex flex-row p-[3rem]  justify-center items-start ">
                            <a href="https://github.com/stephanyborzi">
                                <img src="./Images/github.png" className="w-12 h-12"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/stephany-borzi-marques-28b086266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="ml-8">
                                <img src="./Images/linkedin.png" className="w-12 h-12 "></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
