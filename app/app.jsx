import React from "react";
import { render } from "react-dom";
import "app/stylesheets/style";
import List from "app/components/List";
import Kevin from "app/components/Kevin";
import Holder from "app/components/Holder";
import CounterHolder from "app/components/CounterHolder";
const mountPoint = document.getElementById("mountPoint");
var number = 0;

var add = function() {
  number++;
};

render(
  <div>
    <Holder text = "Holder" />
    <CounterHolder />
  </div>,
  mountPoint
);
