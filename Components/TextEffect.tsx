import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'Software Engineer', // First word
                1000, // Pause for 1 second
                'AI & Data Enthusiast', // Second word
                1000, // Pause for 1 second
                'Coder', // Third word
                1000, // Pause for 1 second
            ]}
            wrapper="span"
            speed={50} // Speed of typing
            className="md:text-[40px] font-bold uppercase text-transparent bg-clip-text bg-white cursor-pointer font-mono"
            repeat={Infinity} // Infinite loop
            aria-label="Profissões em destaque"
        />
    );
};

export default TextEffect;
