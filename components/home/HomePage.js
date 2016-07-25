import React from 'react';
import { Link } from 'react-router';
import FullWidthSection from '../common/FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, { LARGE } from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { grey200, cyan500, blue900, white } from 'material-ui/styles/colors';

const styles = {
  root: {
    paddingTop: spacing.desktopKeylineIncrement,
  },
  button: {
    margin: 12,
  },
  title: {
    root: {
      backgroundColor: white,
      overflow: 'hidden',
    },
    tagline: {
      margin: '16px auto 0 auto',
      textAlign: 'center',
      maxWidth: 575,
    },
    h1: {
      fontSize: 100,
      color: blue900,
      maxHeight: 50,
      paddingTop: 0,
      fontWeight: typography.fontWeightBold,
    },
    h2: {
      fontSize: 20,
      paddingTop: 5,
      marginBottom: 13,
    },
  },
  description: {
    root: {
      backgroundColor: white,
    },
    content: {
      textAlign: 'center',
      maxWidth: 700,
      padding: 0,
      margin: '0 auto',
      fontWeight: typography.fontWeightLight,
      fontSize: 20,
      lineHeight: '28px',
      paddingTop: 19,
      marginBottom: 13,
      letterSpacing: 0,
      color: typography.textDarkBlack,
    },
  },
};

const HomePage = () => (
  <div style={styles.root}>
    <FullWidthSection style={styles.title.root}>
      <div style={styles.title.tagline}>
        <h1 style={styles.title.h1}>Kasih.in</h1>
        <h2 style={styles.title.h2}>Helping is easy.</h2>
        <RaisedButton 
          label="About"
          primary
          containerElement={<Link to="about" />}
          linkButton
          style={styles.button} />
      </div>
    </FullWidthSection>
    <FullWidthSection
      style={styles.description.root}
      useContent
      contentStyle={styles.description.content}
      contentType="p"
      className="description">
      <i><b>Kasih.in is a platform to help you helping people.</b></i><br />
      <br />Search for help, manage your charity project or find someone who needs 
      help near you.<br />
      Kasih.in is 100% free.
    </FullWidthSection>
  </div>
);

export default HomePage;
