import React from 'react'
import styled from 'styled-components';

const Homestyle = styled.div`
  background-color: lightblue;
  max-width: 50%;
`;


const Home = () => {
  return (
    <Homestyle>
      <h2>Home</h2>
      <p>Home Page...</p>
    </Homestyle>
  )
}

export default Home