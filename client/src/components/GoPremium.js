//login backup

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function GoPremium(props) {


  return (
    <div className="box-center">
      <h2>Access premium content here</h2>
    </div>
  );

}

export default GoPremium;