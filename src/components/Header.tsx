import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  box: {
    paddingBottom: theme.spacing(5)
  },  
  icon: {
    marginRight: theme.spacing(2)
  },
}));

interface IHideOnScrollProps {
  children: React.ReactElement;
}
function HideOnScroll(props: IHideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <MenuIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap={true}>
              Rosary
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box className={classes.box} />
    </React.Fragment>
  );
}

export default Header;
