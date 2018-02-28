import React from 'react';

import { Description } from './description.component';

const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    textAlign: 'center',
  },
  heading: {
    fontWeight: 300,
    fontSize: 28,
    marginBottom: 10,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
};

export class Title extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Welcome to Reactron !!</h1>
        <Description />
      </div>
    );
  }
}
