"use client";
import React from "react";
import PropTypes from "prop-types";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Block from "./Block";
import Page from "./Page";
import BlockColumn from "./BlockColumn";
import GreyCard from "./GreyCard";
import SwiperTeachers from "./SwiperTeachers";
import SwiperComponent from "./Swiper";
import CheckmarkWithTitle from "./CheckmarkWithTitle";
import Image from "./Image";
import Text from "./Text";
import NumberAndTitle from "./NumberAndTitle";
import SectionWithVideo from "./SectionWithVideo";
import Section from "./Section";
import Feature from "./Feature";
import Grid from "./Grid";
import ButtonLink from "./ButtonLink";
import Link from "./Link";
import Header from "./Header";

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
    swiperComponent: SwiperComponent,
    swiperTeachers: SwiperTeachers,
    greyCard: GreyCard,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
