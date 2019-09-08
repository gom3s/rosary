// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { Container, Grid, Paper } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { useInention } from 'src/hooks/useApi';
import IntentionCard from '../IntentionCard';

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
  root: {
    padding: theme.spacing(3, 2),
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
          <IntentionCard intention={intention} detailed={true}/>
        </Grid>
        <Grid item={true} key={intention.id} xs={12} sm={6} md={6} lg={8}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Orare pro me,
            </Typography>
          </Paper>

        </Grid>

      </Grid>
    </Container>
  );
};

export default Intention;
