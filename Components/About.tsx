const About = () => {
    return (
        <div className="bg-[#8E44F1] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-[35px] text-white cursor-pointer font-mono">
                        Get to know
                    </h1>
                    <h1 className="text-[35px] font-bold text-white mt-2 cursor-pointer font-mono">
                        About Me
                    </h1>
                    <p className="mt-4 text-white text-[16px] md:text-[18px] cursor-pointer font-mono">
                        I am a passionate and dedicated Software Engineering student at FIAP. With a strong foundation in communication, 
                        problem-solving, and teamwork, I thrive in agile environments where innovation and creativity are key. 
                        I possess excellent analytical skills, a deep understanding of agile learning, 
                        and a focus on delivering high-quality solutions. As an AI and data enthusiast, 
                        I am eager to develop my skills in data engineering to combine my two passions: programming and data. 
                        I am committed to growing in this field and making a meaningful impact through my work.
                    </p>
                </div>
                <div className="w-full h-[100px] md:h-[500px] overflow-hidden">
                    <img 
                        src="/Images/programando.png" 
                        className="w-full h-full object-cover" 
                        alt="Programming"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
