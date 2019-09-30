import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";

import { Container, Grid } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { useInention } from 'src/hooks/useApi';
import IntentionCard from '../IntentionCard';
import PrayCard from '../PrayCard';


const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },  
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(6)
  },
}));

interface IProps {
  id: string;
}

const Intention: React.ComponentType<RouteComponentProps<IProps>> = (props) => {
  const classes = useStyles();
  const { state } = useInention(props.match.params.id);
  const intention = state.data;

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container={true} spacing={2}>
        <Grid item={true} key={intention.id} xs={12} sm={6} md={6} lg={4}>
          <IntentionCard intention={intention} detailed={true} isLoading={state.isLoading}/>
        </Grid>
        <Grid item={true} key={2} xs={12} sm={6} md={6} lg={8}>
          <PrayCard intention={intention} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intention;
