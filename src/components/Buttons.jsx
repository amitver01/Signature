import React, { useState } from 'react';

const Button = ({ onClick , text}) => {

  const [buttColor , setButtColor] = useState('blue')
  return (
    <button
      className={`bg-blue-700 font-bold py-2 px-4 text-white rounded-lg sm:w-full md:w-auto`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
