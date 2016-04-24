import React from "react";
import List from "../List";
import Kevin from "../Kevin";

export default function Holder({ text }) {
  return (<div>
    <List text={text + " this is List"} />
    <Kevin text={text + " this is Kevin"} />
    </div>);
}
