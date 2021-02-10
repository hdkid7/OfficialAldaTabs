// eslint-disable-next-line no-unused-vars
import React from "react";

import { Route } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RouteMaker = ({ route, children }) => (
  <Route path={`/${route}`}>{children}</Route>
);

export default RouteMaker;
