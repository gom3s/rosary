import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { Link as RouterLink } from 'react-router-dom';

import { IIntention } from "./Interface";

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0Q8FdKF0hQMurDCnu0sR9A7yUIZ6lgddZREsY_xbtWz5b_HN9w";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
  isLoading ?: boolean;
  detailed ?: boolean;
}

const IntentionCard: React.ComponentType<IProps> = ({ intention, detailed, isLoading }) => {
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
          { isLoading 
            ?  <LinearProgress variant="query" />
            :  intention.title
          }
        </Typography>
          { isLoading 
            ?  <LinearProgress variant="query" />
            :  description
          }        
      </CardContent>
      {actions}
    </Card>
  );
};

export default IntentionCard;
