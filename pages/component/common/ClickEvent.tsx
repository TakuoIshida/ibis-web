import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
    },
  }),
);

const SimpleAlerts: React.FC = () => {
  const classes = useStyles();

  const handleOnClick = (character: string) => {
    console.log(character);
  };
  const _data: string[] = ["click me", "cat", "rabbit"];

  const HTMLEvent = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.getAttribute("data-item"));
    // ↓これでも書ける
    // console.log(e.currentTarget.dataset.item);
  };
  return (
      <>
    <div className="App">
    <ul>
      {_data.map((value, index) => (
        <li key={index} onClick={() => handleOnClick(value)}>
          {value}
        </li>
      ))}
    </ul>
  </div>
  <Button onClick={HTMLEvent}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SvgIcon />}
          data-item="click me!"
        >
          click me!
      </Button>
  </>
  );
}
export default SimpleAlerts