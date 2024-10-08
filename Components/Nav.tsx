
const Nav = () => {
    return (
        <div className="w-full top-0 h-[12vh] bg-[#1C1032] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-full">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    Stephany Borzi Marques
                </h1>
                <div className="flex items-center justify-between flex-[0.5]">
                    <div className="nav-link relative group text-[18px] text-white font-bold cursor-pointer">
                        HOME
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[18px] text-white font-bold cursor-pointer">
                        EXPERIENCES
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[18px] text-white font-bold cursor-pointer">
                        PROJECTS
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[18px] text-white font-bold cursor-pointer">
                        CONTACT
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
