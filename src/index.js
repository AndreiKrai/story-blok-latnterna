import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import SectionWithVideo from "./components/SectionWithVideo";
import Header from "./components/Header";
import Link from "./components/Link";
import ButtonLink from "./components/ButtonLink";
import Block from "./components/Block";
import Section from "./components/Section";
import NumberAndTitle from "./components/NumberAndTitle";
import Text from "./components/Text";
import BlockColumn from "./components/BlockColumn";
import Image from "./components/Image";
import CheckmarkWithTitle from "./components/CheckmarkWithTitle";

storyblokInit({
  accessToken: "FHFHNN2pdhyuVQUXi9SU4gtt",
  use: [apiPlugin],
  components: {
    page: Page,
    block: Block,
    blockColumn: BlockColumn,
    header: Header,
    link: Link,
    buttonLink: ButtonLink,
    grid: Grid,
    feature: Feature,
    section: Section,
    sectionWithVideo: SectionWithVideo,
    numberAndTitle: NumberAndTitle,
    text: Text,
    image: Image,
    checkmarkWithTitle: CheckmarkWithTitle,
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: "",
  },
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
