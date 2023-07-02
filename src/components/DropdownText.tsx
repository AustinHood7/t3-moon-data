import React, { useState } from 'react';
  
  type Props = {
    text: string;
    numberProp: number;
    titleText: string;
  };

const AnimatedDiv: React.FC<Props> = ({ text, numberProp, titleText }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }
//test comment
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className="text-xl text-white p-4 rounded-xl backdrop-blur-[.2rem] hover:bg-stone-100/10 transition-all duration-300" >
        <h2 className=""><h1 className="text-xl font-bold pb-2" onClick={handleClick}> {titleText} </h1> {numberProp}</h2> 
      </div>
      <div className={`text-xl text-white p-4 rounded-xl border border-stone-100/50 backdrop-blur-[.2rem] mb-16 md:mb-0 ${isVisible ? 'animate-fadeDown' : 'opacity-0 h-0 overflow-hidden'}`} id="dropdown">
        <div className="h-[25vh] overflow-scroll">
          {text}
        </div> 
      </div>
    </div>
  )
}

export default AnimatedDiv;
