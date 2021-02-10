// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TabContent from "./TabContent";
import Profile from "./Profile";
import Overlay from "./Overlay";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavLinkMaker from "./NavLinkMaker";

import { jsx, css } from "@emotion/core";
/** @jsx jsx */

// eslint-disable-next-line react/prop-types
const OverlayProfile = ({
  name,
  profession,

  overlaySummary,
  image,
  yearsEst,
  dateInvested
}) => {
  const [overlay, setOverlayState] = useState(false);

  const overlayClick = () => {
    setOverlayState(true);
  };

  const exitClick = () => setOverlayState(false);

  return (
    <Fragment>
      {overlaySummary.trim().length !== 0 && (
        <Overlay
          name={name}
          profession={profession}
          text={overlaySummary}
          img={image}
          exit={() => exitClick()}
          isClosed={overlay}
        />
      )}
      <Profile
        name={name}
        profession={profession}
        img={image}
        yearsEst={yearsEst}
        isPending={overlaySummary.trim().length === 80}
        click={() => overlayClick()}
        investedDate={dateInvested}
      />
    </Fragment>
  );
};

// const ctaArray = [
//   "Tab Name",
//   "Faculty",
//   `j.jpg`,
//   "Lydia Franco-Hodges",
//   "Assistant Professor of Practice",
//   "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
//   "j.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL",
//   "j3.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL",
//   "j2.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL",
//   "Tab Name",
//   "Staff",
//   "9376523b66d460556917458f873dfbc4.jpg",
//   "John Doe",
//   "This is 2022",
//   "Summary LOL",
//   "9376523b66d460556917458f873dfbc4.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL",
//   "9376523b66d460556917458f873dfbc4.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL",
//   "9376523b66d460556917458f873dfbc4.jpg",
//   "John Doe",
//   "This is 2021",
//   "Summary LOL"
// ];
const keys = ["Tab Name"];
// eslint-disable-next-line no-undef
const result = ctaArray.reduce(
  // eslint-disable-next-line no-unused-vars
  (i => (r, s) => {
    if (s === keys[0]) {
      r.push([]);
      i++;
    }
    r[r.length - 1].push(s);
    return r;
  })(0),
  []
);

const newResult = [];

result.forEach(element => {
  newResult.push(element.filter(s => s != "Tab Name"));
});

function chunkArray(array, chunkSize) {
  var result = [];
  while (array.length) {
    result.push(array.splice(0, chunkSize));
  }

  return result;
}

const object = newResult.map(a => {
  const [head, ...rest] = a;

  return Object.assign({
    tabName: head,
    profile: chunkArray(rest, 4).map(s =>
      Object.assign({
        imgPath: s[0],
        name: s[1],
        profession: s[2],
        overlaySummary: s[3]
      })
    )
  });
});

const RouteViewBuiler = () => {
  const listItems = object.map((obj, index) => (
    <Route key={index} path={`/${obj.tabName.toLowerCase()}`}>
      <TabContent>
        {obj.profile.map((o, index) => (
          <OverlayProfile
            key={index}
            name={o.name}
            image={o.imgPath}
            profession={o.profession}
            overlaySummary={o.overlaySummary}
            yearsEst={o.yearsEst}
            dateInvested={o.investedDate}
          />
        ))}
      </TabContent>
    </Route>
  ));
  return listItems;
};

const NavBuilder = () => {
  const listItems = object.map((obj, index) => (
    <NavLinkMaker key={index} route={obj.tabName.toLowerCase()}>
      {obj.tabName}
    </NavLinkMaker>
  ));
  return <Fragment>{listItems}</Fragment>;
};

const App = () => {
  return (
    <Router>
      <ul
        css={css`
          position: relative;
          text-align: center;
          list-style: none;
          margin-top: 2em;
          padding: 0;
          line-height: 24px;
          width: 100%;

          &:before {
            z-index: 1;
          }

          &:after {
            position: absolute;
            content: "";
            width: 100%;
            bottom: 0;
            left: 0;
            border-bottom: 1px solid #aaa;
            z-index: -1;
          }
        `}
      >
        <nav css={css``}>
          <NavBuilder />
        </nav>
        <Switch>
          <RouteViewBuiler />
        </Switch>
      </ul>
      <Redirect exact from="/" to={`/${object[0].tabName.toLowerCase()}`} />
    </Router>
  );
};

export default App;

const wrapper = document.getElementById("alda-tabcontainer");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
