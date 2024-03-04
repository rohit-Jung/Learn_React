import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://lofrev.net/wp-content/photos/2017/05/roar_r_logo_1.png"
        alt=""
        width={width}
      />
    </div>
  );
}

export default Logo;
