import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { IMystery } from 'src/consts/rosary';

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

const PrayCard: React.ComponentType<IPrayCard> = (props) => {
  const { isPraying, mystery } = props;
  const classes = useStyles();
  const actions =
    <CardActions>
        <Button size="small" color="primary" onClick={props.onPrayRequestAction} disabled={isPraying}>
          Pobierz tajemnicę
        </Button>      
      <Button size="small" color="primary" onClick={props.onPrayAction} disabled={!isPraying}>
        Gotowe (zapisz)
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
          { isPraying 
            ? mystery.title
            : null
          }
        </Typography>
        <Typography>
          { isPraying 
            ?  mystery.description
            :  null
          }
          </Typography>
       {/* TODO display pondering of mystery */}   
      </CardContent>
      {actions}
    </Card>
  );
};

interface IPrayCard {
  isPraying: boolean;
  mystery: IMystery;
  onPrayRequestAction: () => void;
  onPrayAction: () => void;
}

// const PrayCard: React.ComponentType<IPrayCard> = (props) => {
//   const { isPraying, mystery } = props;
//   return (
//     <Grid container={true} spacing={2}>
//       <Grid item={true} xs={12}>
//         { isPraying
//             ?  <>
//                 <Paper>{mystery.title}</Paper>
//                 <Paper>{mystery.description}</Paper>
//               </>
//             :  null
//         }
//       </Grid>
//       <Divider />
//       <Grid item={true} xs={12}>
//         {/* TODO display pondering of mystery */}
//       </Grid>
//       <Divider />
//       <Grid item={true} xs={6}>
        // <Button size="small" color="primary" onClick={props.onPrayRequestAction} disabled={isPraying}>
        //   Pobierz tajemnicę
        // </Button>
//       </Grid>
//       <Grid item={true} xs={6}>
//         <Button size="small" color="primary" onClick={props.onPrayAction} disabled={!isPraying}>
//           Gotowe (zapisz)
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

export default PrayCard;