import { Grid, Paper } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import * as React from "react";
import { IMystery } from 'src/consts/rosary';

interface IPrayCard {
  isPraying: boolean;
  mystery: IMystery;
  onPrayRequestAction: () => void;
  onPrayAction: () => void;
}

const PrayCard: React.ComponentType<IPrayCard> = (props) => {
  const { isPraying, mystery } = props;
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={12}>
        { isPraying
            ?  <Paper>{mystery.title}</Paper>
            :  null
        }
      </Grid>
      <Divider />
      <Grid item={true} xs={12}>
        {/* TODO display pondering of mystery */}
      </Grid>
      <Divider />
      <Grid item={true} xs={6}>
        <Button size="small" color="primary" onClick={props.onPrayRequestAction} disabled={isPraying}>
          Pobierz tajemnicę
        </Button>
      </Grid>
      <Grid item={true} xs={6}>
        <Button size="small" color="primary" onClick={props.onPrayAction} disabled={!isPraying}>
          Gotowe (zapisz)
        </Button>
      </Grid>
    </Grid>
  );
};

export default PrayCard;