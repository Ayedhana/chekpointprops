import React from 'react';
import './profile.css';
import PropTypes from "prop-types";

const Profile = ({FullName,Bio,Profession,handelName}) => {
  const styleProfile={width:"180px",height:"180px"}
  return (
    <div>
    <div className="desc">
    <img style={styleProfile}  src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg" alt="imageprofile"/>
      <h3 style={{color:"lightblue",fontFamily:"Arial",textAlign:"center"}} >{FullName}</h3>
      <p>{Bio}</p>
      <h3 style={{color:"lightblue",fontFamily:"Arial",textAlign:"center"}} >{Profession}</h3>
      </div>
      {handelName(FullName)}
    </div>
  );
};
Profile.defaultProps={
  FullName:"nnnnnnnnnnnnnnnnnn",
  Bio:"bbbbbbbbbbbbbb",
  Profession:"ppppppppppppppppppp"
}
Profile.propTypes = {
  FullName: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,
};
export default Profile;