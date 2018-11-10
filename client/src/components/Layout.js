import React from "react";

const Layout = props => (
  <>
    <header>
      <h1>This is header</h1>
    </header>
    <article>{props.children}</article>
  </>
);

export default Layout;
