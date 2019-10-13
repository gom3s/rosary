import { Grid, Paper } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { useEffect, useState } from 'react';
import { getMystery } from '../../consts/rosary';
import { 
  usePrayRosaryRequest,
  useSavePrayer
} from '../../hooks/useRosaryApi';
// import logo from '../../rosary.svg';
import { IIntention } from '../IntentionCard/Interface';

import * as dayjs from 'dayjs';

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
  const { state, doRequest } = usePrayRosaryRequest()
  const prayerApi = useSavePrayer()
  const [isPraying, setIsPraying] = useState(false)
  const prayRequestAction = () => {
    doRequest({ intention: `intentions/${props.intention.id}`}, "")
    // TODO GM Display remaining lock time indicator
    // tslint:disable-next-line:no-console
    console.log('state ', state)
  }
  const prayAction = () => {
    setIsPraying(false)
    prayerApi.doRequest({
      type: state.data.type,
      rosary: state.data.rosary,
      date: dayjs().toJSON(),
      lockDate: null,
    }, state.data.prayer)
  }
  useEffect(() => {
    setIsPraying(state.data.type > 0)
  }, [state.data.type]);

  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={12}>
        { isPraying
            ?  <Paper>{getMystery(state.data.type).title}</Paper>
            :  null
        }
      </Grid>
      <Divider />
      <Grid item={true} xs={12}>
        {/* TODO display pondering of mystery */}
      </Grid>
      <Divider />
      <Grid item={true} xs={6}>
        <Button size="small" color="primary" onClick={prayRequestAction} disabled={isPraying}>
          Pobierz tajemnicę
        </Button>
      </Grid>
      <Grid item={true} xs={6}>
        <Button size="small" color="primary" onClick={prayAction} disabled={!isPraying}>
          Gotowe (zapisz)
        </Button>
      </Grid>
      { state.isLoading
          ?  <CircularProgress className={classes.progress} size={18}/>
          :  null
      }
    </Grid>
  );
};

export default PrayCard;
