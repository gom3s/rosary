import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { Link as RouterLink } from 'react-router-dom';

import { IIntention } from "./Interface";

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
  intention: Partial<IIntention>;
  detailed ?: boolean;
}

const IntentionCard: React.ComponentType<IProps> = ({ intention, detailed }) => {
  const classes = useStyles();
  const description = detailed && <Typography>{intention.description}</Typography>;
  const actions = !detailed && 
    <CardActions>
      <Button size="small" color="primary">
        <Link component={RouterLink} to={`/intention/${intention.id}`}>Dalej</Link>
      </Button>
    </CardActions>
  ;

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
        {description}
      </CardContent>
      {actions}
    </Card>
  );
};

export default IntentionCard;
