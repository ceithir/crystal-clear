import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = {
  typography: {
    useNextVariants: true
  }
};

const themes = {
  default: createMuiTheme(defaultTheme),
  dark: createMuiTheme({
    ...defaultTheme,
    palette: {
      type: 'dark'
    }
  })
};

const styles = theme => ({
  card: {
    width: 175,
    height: 250,
    margin: 5
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {},
  text: {
    flexGrow: 1
  },
  flavor: {}
});

class CrystalCard extends PureComponent {
  render() {
    const { classes, name, text, flavor, theme } = this.props;

    return (
      <MuiThemeProvider theme={themes[theme]}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              variant="subtitle2"
              gutterBottom
            >
              {name}
            </Typography>

            <Typography className={classes.text} variant="body2">
              {text}
            </Typography>

            {flavor && (
              <Typography
                className={classes.flavor}
                variant="body2"
                color="textSecondary"
              >
                {flavor}
              </Typography>
            )}
          </CardContent>
        </Card>
      </MuiThemeProvider>
    );
  }
}

CrystalCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  flavor: PropTypes.string,
  theme: PropTypes.string.isRequired
};

CrystalCard.defaultProps = {
  theme: 'default'
};

export default withStyles(styles)(CrystalCard);
