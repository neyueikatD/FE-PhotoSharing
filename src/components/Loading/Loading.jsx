import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './Loding.css'

const Loading = ({text}) => {
  text = text ? text : "Loading..."
  return (
    <div className="loading-container">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" className="load-icon"/>
      <p>{text}</p>
    </div>
  );
};
export default Loading;
