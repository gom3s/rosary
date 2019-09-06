import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { RouteComponentProps } from 'react-router-dom';
import { useInention } from 'src/hooks/useApi';

const image =
  "https://images.unsplash.com/photo-1528357136257-0c25517acfea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  }
}));

interface IProps {
  id: string;
}

const Intention: React.ComponentType<RouteComponentProps<IProps>> = (props) => {
  const classes = useStyles();
  const { state } = useInention(props.match.params.id);
  const intention = state.data;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom={true} variant="h5" component="h2">
          {intention.title}
        </Typography>
        <Typography>{intention.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link href="#">Więcej</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Intention;
