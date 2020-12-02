// packages

import React from 'react';

// UI-Terminal components

import { Container, Icon } from 'nes-react';

// code

export const SocialSet = () => {
  return (
    <>
      <Container centered>
        <div className="quiz-social">
          <Icon icon="facebook" className="quiz-facebook terminal-icon" />
          <Icon icon="twitter" className="quiz-twitter terminal-icon" />
        </div>
      </Container>
    </>
  );
};
