import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const InfoCard = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <FontAwesomeIcon icon={faLightbulb} />
        
      </div>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-dark mb-4">{title}</h2>
      <p className="text-gray-600 text-lg max-w-2xl">
        {content}
      </p>
    </div>
  );
};

export default InfoCard;