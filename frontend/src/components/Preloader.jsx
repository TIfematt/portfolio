import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import './Preloader.scss'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isLoading ? (
    <div className="preloader">
      <BeatLoader color="#ffffff" />
    </div>
  ) : (
    <div>Content loaded!</div>
  );
};

export default Preloader;
