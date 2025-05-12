import React from 'react';

const BackgroundDecor = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/5 animate-float"></div>
      <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-secondary/5 animate-float-delay-1"></div>
      <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-accent/5 animate-float-delay-2"></div>
    </div>
  );
};

export default BackgroundDecor;