import React, { useState } from "react";
import HeaderLogo from "./header-logo";

const HeaderLogoContainer = () => {
  const [visible, setVisible] = useState(false);
  const openDrawer = () => setVisible(!visible) 
  return <HeaderLogo openDrawer={openDrawer} visible={visible} />
}

export default HeaderLogoContainer;