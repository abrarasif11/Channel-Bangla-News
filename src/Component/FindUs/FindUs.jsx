import React from "react";
import fb from '../../assets/fb.png'
import twit from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'
const FindUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-4 mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
            <img src={fb} alt="" />
            Facebook</button>
        <button className="btn join-item justify-start">
        <img src={twit} alt="" />  
            Twitter</button>
        <button className="btn join-item justify-start">
        <img src={insta} alt="" />
            Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
