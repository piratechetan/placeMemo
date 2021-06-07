import React from 'react';
import {Container, Spinner} from 'native-base';
const emptyContainer = () => {
  return (
    <Container style={{marginTop: 0, height: 60}}>
      <Spinner color={'#0f4c75'} />
    </Container>
  );
};

export default emptyContainer;
