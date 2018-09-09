import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function BasePage(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
  
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Input
        </Typography>
        <Typography component="p">
          Inputs go here
        </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            MNIST
          </Typography>
          <Typography component="p">
            A dataset of handrawn numerical characters 0-9.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Training: 28x28x60,000
            <br />
            Testing: 28x28x10,000
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Select</Button>
        </CardActions>
      </Card>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Network
        </Typography>
        <Typography component="p">
          Network units go here
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Output
        </Typography>
        <Typography component="p">
          Network outputs go here
        </Typography>
      </Paper>
    </div>
  );
}

BasePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasePage);