import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./styles";
import { useHistory, Link, NavLink } from "react-router-dom";

const data = [
  {
    key: "/temp",
    value: "A",
    depth2: [],
  },
  {
    key: "/temp1",
    value: "B",
    depth2: [{ key: "/temp1/page", value: "페이지1" }],
  },
  {
    key: "/temp2",
    value: "C",
    depth2: [{ key: "/temp2/page", value: "페이지1" }],
  },
  {
    key: "/temp3",
    value: "D",
    depth2: [{ key: "/temp3/page", value: "페이지1" }],
  },
  {
    key: "/temp4",
    value: "E",
    depth2: [{ key: "/temp4/page", value: "페이지1" }],
  },
  {
    key: "/temp5",
    value: "F",
    depth2: [{ key: "/temp5/page", value: "페이지1" }],
  },
  {
    key: "/temp6",
    value: "G",
    depth2: [{ key: "/temp6/page", value: "페이지1" }],
  },
  {
    key: "/temp7",
    value: "H",
    depth2: [{ key: "/temp7/page", value: "페이지1" }],
  },
];

const Depth2Component = (props) => {
  const { menu } = props;
  return (
    <ul className="depth2">
      {menu &&
        menu.depth2 &&
        menu.depth2.map((x, index) => {
          return (
            <li key={index} className="">
              <NavLink
                to={x.key}
                activeClassName="on"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {x.value}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

const Sidebar = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Grid className="sidebar">
        <Grid container justify="center" alignItems="center" className="logo">
          <Grid item>
            <Grid className="img_box">
              {/* <img src="/images/sidebar_logo.png" alt="" /> */}
              로고
            </Grid>
          </Grid>
        </Grid>
        <Grid className="gnb">
          <ul>
            {data.map((x, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={x.key}
                    activeClassName="on"
                    className={x.depth2.length === 0 ? "no_depth" : ""}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {x.value}
                  </NavLink>
                  <Depth2Component menu={x} />
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Sidebar;
