import { Paper } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { getMystery } from '../../consts/rosary';
import { usePrayRosaryRequest } from '../../hooks/useRosaryApi';
import logo from '../../rosary.svg';
import { IIntention } from '../IntentionCard/Interface';

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(6)
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  icon: {
    marginLeft: theme.spacing(1),
    width: 30
  },
  progress: {
    marginLeft: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}));

interface IPrayCard {
  intention: IIntention;
}

const PrayCard: React.ComponentType<IPrayCard> = (props) => {
  const classes = useStyles()
  const { state, doPost } = usePrayRosaryRequest()

  const prayAction = () => {
    doPost({ intention: props.intention.id})
    
    // tslint:disable-next-line:no-console
    console.log('state ', state)
  }

  return (
    <Paper className={classes.root}>
      <Button variant="contained" color="primary" onClick={prayAction}>
        Odmów dziesiątek
        <img src={logo} className={classes.icon} alt="logo" />
      </Button>
      { state.isLoading
          ?  <CircularProgress className={classes.progress} size={18}/>
          :  null
      }
      { state.data.type > 0
          ?  getMystery(state.data.type).title
          :  null
      }
    </Paper>
  );
};

export default PrayCard;
