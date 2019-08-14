import * as React from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      <Link color="inherit" href="https://github.com/gom3s/rosary">
        {" gom3s/rosary"}
      </Link>{" "}
      {"Jesteśmy na "}
      <Link color="inherit" href="https://github.com/gom3s/rosary">
        GitHub
      </Link>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6)
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom={true}>
          Projekt Open Source!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          >
          GPLv3
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default Footer;