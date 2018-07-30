import React from "react";

const styles = {
  fontWeight: 300,
  fontSize: 14,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

export class Description extends React.Component {
  render() {
    return <div style={styles}>Your desktop application built with React and Electron and Parcel</div>;
  }
}
