import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import SectionWithVideo from "./components/SectionWithVideo";
import Header1 from "./components/Header1";
import Link from "./components/Link";
import ButtonLink from "./components/ButtonLink";
import Block from "./components/Block";
import Section from "./components/Section";
import NumberAndTitle from "./components/NumberAndTitle";

storyblokInit({
  accessToken: "FHFHNN2pdhyuVQUXi9SU4gtt",
  use: [apiPlugin],
  components: {
    page: Page,
    block:Block,
    header1: Header1,
    link:Link,
    buttonLink:ButtonLink,
    grid: Grid,
    feature: Feature,
    section:Section,
    sectionWithVideo:SectionWithVideo,
    numberAndTitle:NumberAndTitle
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
