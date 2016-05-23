import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >

        Hi, my name is <strong>{config.authorName}</strong>. I am a <strong>software enginner</strong>  who lives and works in Austin, TX building awesome things. <a href="https://twitter.com/marcoapineda">Follow me on Twitter</a>
      </p>
    )
  }
}

export default Bio
