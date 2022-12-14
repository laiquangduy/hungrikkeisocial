import React, { useState, useEffect } from "react";
import Manage from "./Manage";
import Managenetwork from "./Managenetwork";
import People from "./People";

function Network() {
  return (
    <>
      <div className='t-displayfollow'>
        <span>
          <Managenetwork />
        </span>
        <span>
          <div className='t-linkedincontai'>
            <Manage />
          </div>

          <div className='t-linkedincontai'>
            <People />
          </div>
        </span>
      </div>
    </>
  );
}

export default Network;
