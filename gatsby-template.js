import React from 'react'
import { graphql } from 'gatsby'

export default function StoryblokEntry ({ data }) {
  const story = data.storyblokEntry

  return (
    <div>{story.name}</div>
  )
}

export const query = graphql`
  query($slug: String!) {
    storyblokEntry(slug: { eq: $slug }) {
      id
      name
      full_slug
    }
  }`