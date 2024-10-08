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
            className=' md:text-[40px] text-[white] font-bold uppercase'
            repeat={Infinity}
        />
    );
};
export default TextEffect;