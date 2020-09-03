import React from "react";
import "./css/style.css";
import task from "./assets/transparent.png";
import grand from "./assets/grand.png";
import gender from "./assets/gender.png";
import smile from "./assets/smile.png";
import local from "./assets/location.png";
const result = () => {
  return (
    <>
      <div className="absolute-title">
        <div className="result-title">
          <img src={task} className="image-line" alt="" />
          <p className="result-paraph">Result:</p>
        </div>
      </div>
      <div className="absolute-result">
        <div className="test1">
          <div className="result">
            <img src={grand} className="image-grand" alt="" />

            <div className="result-text text-center">
              <p className="word">Age</p>10
            </div>
          </div>
        </div>
        <div className="test2">
          <div className="result">
            <img src={gender} className="image-gender" alt="" />
            <div className="result-text text-center">
              <p className="word">gender</p>10
            </div>
          </div>
        </div>
        <div className="test3">
          <div className="result">
            <img src={smile} className="image-smile" alt="" />
            <div className="result-text text-center">
              <p className="word">Emotions</p>10
            </div>
          </div>
        </div>
        <div className="test4">
          <div className="result">
            <img src={local} className="image-local" alt="" />
            <div className="result-text text-center">
              <p className="word">Origin</p>10
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default result;
