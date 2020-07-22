import React from "react";
import Note from "../../common/note/note";
import Link from "../../common/link/link";

import "./footer__copyright.scss";

const FooterCopyright = () => (
  <article className="footer__copyright">
    <Note>© Copyright, 2020</Note>
    <Note>Created by: <Link href={"https://github.com/dnagafonov"}>dnagafonov</Link></Note>
  </article>
);

export default FooterCopyright;
