import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    margin: {
        marginTop: 30,
    },
    button: {
        margin: theme.spacing(1),
    },
  }),
);

const SimpleAlerts: React.FC = () => {
  const classes = useStyles();
  return (
      <>
    <div className={classes.root}>
      <Alert className={classes.margin} severity="error">This is an error alert! </Alert>
      <Alert className={classes.margin} severity="warning">This is a warning alert — check it out!</Alert>
      <Alert className={classes.margin} severity="info">This is an info alert — check it out!</Alert>
      <Alert className={classes.margin} severity="success">This is a success alert — check it out!</Alert>
    </div>
  </>
  );
}
export default SimpleAlerts