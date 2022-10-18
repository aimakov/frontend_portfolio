import React from "react";
import { useEffect, useState } from "react";

const Alert = (props) => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    setTimeout(() => setTop(true), [200]);
  }, []);

  useEffect(() => {
    setTimeout(() => setTop(false), [2800]);
    setTimeout(() => props.setShowAlert(false), [3000]);
  });

  return (
    <div
      className={` z-10 fixed ${
        top ? "top-24" : "-top-24"
      } left-2/4 transition-all duration-200 -translate-x-1/2 p-4 mb-4 text-sm ${
        props.alertClassName
      }`}
      //   role="alert"
    >
      <span className="font-medium">{props.boldText}</span>{" "}
      {props.additionalText}
    </div>
  );
};

export default Alert;
