const About = () => {
    return (
        <div className="bg-[#8E44F1] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-[35px] text-white">
                        Get to know
                    </h1>
                    <h1 className="text-[35px] font-bold text-white mt-2">
                        About Me
                    </h1>
                    <p className="mt-4 text-white text-[16px] md:text-[18px]">
                        I'm a passionate software engineer with experience in developing scalable web applications.
                        I enjoy solving complex problems and continuously learning new technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
