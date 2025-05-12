import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const Card = ({ icon, title, content, bgColor, textColor }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-3`}>
        {/* <i className={`fa fa-${icon} ${textColor}`}></i> */}
        <FontAwesomeIcon icon={faFaceSmile} />
      </div>
      <h4 className="font-semibold text-dark mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  );
};

export default Card;