import {
  Button,
  Container,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails as MuiExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useIntention } from "../../hooks/useRosaryApi";
import rosarySVG from '../../rosary2.svg';
import IntentionCard from "../IntentionCard";
import PrayCard from "../PrayCard";

// tslint:disable-next-line: object-literal-sort-keys
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  root: {
    width: "100%",
  },
  icon: {
    marginLeft: theme.spacing(1),
    width: 30
  },  
}));

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails);

interface IProps {
  id: string;
}

const IntentionPage: React.ComponentType<RouteComponentProps<IProps>> = props => {
  const classes = useStyles();
  const { state } = useIntention(props.match.params.id);
  const intention = state.data;
  const [intentionPanel, setIntentionPanel] = useState({
    expanded: true
  })
  const [prayPanel, setPrayPanel] = useState({
    expanded: false
  })  
  const toggleIntentionPanel = (event: object, expanded: boolean) => {
    setIntentionPanel({
      expanded
    })
  }
  const togglePrayPanel = (event: object, expanded: boolean) => {
    setPrayPanel({
      expanded
    })
  }
  const openPrayPanel = () => togglePrayPanel({}, true)
  const closeIntentionPanel = () => toggleIntentionPanel({}, false)
  const startPray = () => {
    closeIntentionPanel()
    openPrayPanel()
  }

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container={true} spacing={2}>
        <Grid item={true} key={intention.id} xs={12} sm={6} md={6} lg={4}>
          <div className={classes.root}>
            <ExpansionPanel 
              expanded={intentionPanel.expanded}
              onChange={toggleIntentionPanel}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {intentionPanel.expanded ? 'Intencja' : intention.title }
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.root}>
                <IntentionCard
                  intention={intention}
                  detailed={true}
                  isLoading={state.isLoading}
                />
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button size="small">Jak to działa?</Button>
                <Button size="small" color="primary" onClick={startPray}>
                  Odmów dziesiątek
                </Button>
              </ExpansionPanelActions>              
            </ExpansionPanel>
            <ExpansionPanel 
              expanded={prayPanel.expanded}
              onChange={togglePrayPanel}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Modlitwa
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <PrayCard intention={intention} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Grid>
        <Grid item={true} key={2} xs={12} sm={6} md={6} lg={8}>
          <Paper className={classes.root}>
            {/* TODO add statistics and current rosary progress indicator */}
            <img src={rosarySVG} className={classes.icon} alt="rosary" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntentionPage;
