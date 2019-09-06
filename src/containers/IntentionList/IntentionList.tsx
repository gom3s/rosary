import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import IntentionCard from "../../components/IntentionCard";
import { useInentionsApi } from './api';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8)
  }
}));



const CardList = (props: any) => {
  const classes = useStyles();
  const { state } = useInentionsApi();
  const { data } = state;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container={true} spacing={4}>
        {data.map(intention => (
          <Grid item={true} key={intention.id} xs={12} sm={6} md={4}>
            <IntentionCard
              intention={intention}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;
