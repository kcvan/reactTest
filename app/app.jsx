import React from "react";
import { render } from "react-dom";
import "app/stylesheets/style";
import List from "app/components/List";

const mountPoint = document.getElementById("mountPoint");

render(
  <List text="FALALALALALA" />,
  mountPoint
);
