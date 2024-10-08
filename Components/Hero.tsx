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
                </div>
            </div>

        </div>
    );
};

export default Hero;
