import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'Software Engineer',
                1000,
                'Data Engineer',
                1000,
                'Coder',
                1000,
            ]}
            wrapper="span"
            speed={50}
            className="md:text-[40px] font-bold uppercase text-transparent bg-clip-text bg-white"
            repeat={Infinity}
            aria-label="Profissões em destaque"
        />
    );
};

export default TextEffect;
