import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import Intention from "../../components/Intention";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardList = (props: any) => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container={true} spacing={4}>
        {cards.map(card => (
          <Grid item={true} key={card} xs={12} sm={6} md={4}>
            <Intention
              intention={{
                description: "Przyłącz się do modlitwy w intencji....",
                id: "#",
                title: "Modlitwa w intencji ....",
                userId: "#"
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;
