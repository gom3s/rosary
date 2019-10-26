import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import * as dayjs from 'dayjs';
import * as React from "react";
import { useEffect, useState } from 'react';

import PrayCard from 'src/components/PrayCard';
// import PrayDisclaimerCard from 'src/components/PrayDisclaimerCard';
import { IIntention } from '../../components/IntentionCard/Interface';
import { getMystery } from '../../consts/rosary';
import { 
  usePrayer,
  usePrayRosaryRequest,
  useSavePrayer
} from '../../hooks/useRosaryApi';

const useStyles = makeStyles(theme => ({
  progress: {
    marginLeft: theme.spacing(2)
  },
}));

interface IPrayer {
  intention: IIntention;
  onPrayerChanged: (prayerId?: string) => void;
  prayerId?: string;
}

const Prayer: React.ComponentType<IPrayer> = (props) => {
  const classes = useStyles()
  const [ state, setState ] = useState({
    type: 0,
    id: props.prayerId,
    rosary: '',
    prayer: 'prayers/', 
  })
  const prayRequestApi = usePrayRosaryRequest()
  const savePrayerApi = useSavePrayer()
  const getPrayerApi = usePrayer(props.prayerId)
  const [isPraying, setIsPraying] = useState(Boolean(props.prayerId))
  const prayRequestAction = () => {
    setState({
      ...state,
      type: 0, // reset displayed mystery
    })
    prayRequestApi.doRequest({ intention: `intentions/${props.intention.id}`}, "")
    setIsPraying(true)    
    // TODO GM Display remaining lock time indicator
  }
  const prayAction = () => {
    setIsPraying(false)
    savePrayerApi.doRequest({
      ...state,
      date: dayjs().toJSON(),
      lockDate: null,
    }, state.prayer)
  }
  
  useEffect(() => {
    setState({
      prayer: `prayers/${props.prayerId}`,
      ...getPrayerApi.state.data,
    })      
  }, [getPrayerApi.state.data])
  
  useEffect(() => {
    const {type, rosary, prayer} = prayRequestApi.state.data;
    setState({
      id: props.prayerId,
      type,
      rosary,      
      prayer,
    })
    
    if (prayer) {
      props.onPrayerChanged(prayer);
    }
  }, [prayRequestApi.state.data.type]);

  return (
    <Grid container={true} spacing={2}>
      <PrayCard
        mystery={getMystery(state.type)}
        isPraying={isPraying}
        onPrayAction={prayAction}
        onPrayRequestAction={prayRequestAction}
      />
      { prayRequestApi.state.isLoading
          ?  <CircularProgress className={classes.progress} size={18}/>
          :  null
      }
    </Grid>
  );
};

export default Prayer;
