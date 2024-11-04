import React from 'react'
import styled from 'styled-components';

const Aboutstyle = styled.div`
  background-color: pink;
  max-width: 50%;
`;

const About = () => {
  return (
    <Aboutstyle>
      <h2>About</h2>
      <p>About Page...</p>
    </Aboutstyle>
  )
}

export default About