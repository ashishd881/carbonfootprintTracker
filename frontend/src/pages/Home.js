import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;
const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
  color: #388e3c;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 1em;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Home() {
  return (
    <Wrapper>
      <Title>🌱 Carbon Challenge Platform</Title>
      <Subtitle>
        Compete with friends, log your activities, and earn rewards for reducing your carbon footprint!
      </Subtitle>
      <ButtonRow>
        <StyledLink to="/login"><button>Login</button></StyledLink>
        <StyledLink to="/register"><button>Register</button></StyledLink>
      </ButtonRow>
    </Wrapper>
  );
}

export default Home; 