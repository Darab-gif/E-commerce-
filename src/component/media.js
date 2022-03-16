import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebook,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faFacebook, faTelegram, faTwitter);
const Media = () => {
  return (
    <div className="media">
      <FontAwesomeIcon icon={faFacebook} size="lg" />
      <FontAwesomeIcon
        style={{ marginLeft: "15px" }}
        icon={faTelegram}
        size="lg"
      />
      <FontAwesomeIcon
        style={{ marginLeft: "15px" }}
        icon={faTwitter}
        size="lg"
      />
    </div>
  );
};

export default Media;
