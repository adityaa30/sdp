import Diff from "./Diff";
import Visualiser from "./Visualiser";
import Home from "./Home";
import * as React from "react";

export interface Feature {
  name: string
  path: string
  component: React.FC
}

export const features: Feature[] = [
  {name: "Home", path: "/", component: Home},
  {name: "Visualiser", path: "/visualiser", component: Visualiser},
  {name: "Diff", path: "/diff", component: Diff},
];


export { Home, Diff, Visualiser };