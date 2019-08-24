import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { IIntention } from 'src/components/Intention/Interface';
import Intention from "../../components/Intention";
import useRosaryApi from './api';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8)
  }
}));

interface IIntentionList {
  intentions: IIntention[];
}

const CardList = (props: any) => {
  const classes = useStyles();
  const { state } = useRosaryApi<IIntentionList>('intentions', { intentions: []});
  const { data } = state;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container={true} spacing={4}>
        {data.intentions.map(intention => (
          <Grid item={true} key={intention.id} xs={12} sm={6} md={4}>
            <Intention
              intention={intention}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;
