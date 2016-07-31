import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { lightGreen100, lightGreen900 } from 'material-ui/styles/colors';

const style = {
  root: {
    backgroundColor: lightGreen100,
    width: '99%',
    height: '20%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  text: {
    color: lightGreen900,
  },
};


const DialogPage = () =>
  <div>
    <Paper style={style.root} zDepth={1}>
      <h3 style={style.text}>Welcome to Kasih.in</h3>
      <p style={style.text}>Thank you for using Kasih.in.
      Kasih.in is 100% free, however if you want to support us, you can donate
        <a style={style.text} href="#"> here.</a>
      </p>
    </Paper>
  </div>;

export default DialogPage;
