import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import * as React from "react";
import { useEffect, useState } from 'react';
import { IIntention } from 'src/components/Intention/Interface';
import Intention from "../../components/Intention";

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
  const [ { intentions }, setState ] = useState<IIntentionList>({ intentions: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/intentions',
      );
  
      setState(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container={true} spacing={4}>
        {intentions.map(intention => (
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
