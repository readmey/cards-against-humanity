import React, { useState, FC } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomDialog from '../components/Dialog/CustomDialog';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
  animatedButton: {
    animation: '$shadow-pop-tr 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
  },
  '@keyframes shadow-pop-tr': {
    '0%': {
      boxShadow: '0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2, 0 0 #ffb8d2',
      transform: 'translateX(0) translateY(0)',
    },
    '100%': {
      boxShadow:
        '1px -1px #ffb8d2, 2px -2px #ffb8d2, 3px -3px #ffb8d2, 4px -4px #ffb8d2, 5px -5px #ffb8d2, 6px -6px #ffb8d2, 7px -7px #ffb8d2, 8px -8px #ffb8d2',
      transform: 'translateX(-8px) translateY(8px)',
    },
  },
  animatedTitle: {
    animation: '$text-pop-up-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    color: 'white',
    textAlign: 'center',
    marginTop: '5rem',
    fontSize: 80,
  },
  '@keyframes text-pop-up-top': {
    '0%': {
      transform: 'translateY(0)',
      transformOrigin: '50% 50%',
      textShadow: 'none',
    },
    '100%': {
      transform: 'translateY(-50px)',
      transformOrigin: '50% 50%',
      textShadow:
        '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 30px 40px rgba(0, 0, 0, 0.3)',
    },
  },
  textField: {
    marginBottom: '1rem',
  },
  icon: {
    marginLeft: '0.5rem',
  },
});

const StartGame: FC = () => {
  const [dialog, setDialog] = useState({
    createGame: false,
    joinGame: false,
  });
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.animatedTitle}>Cards Against humanity</h1>
      <Box display='flex' justifyContent='space-around'>
        <Button
          className={classes.animatedButton}
          variant='contained'
          size='large'
          color='secondary'
          onClick={() => setDialog({ ...dialog, createGame: true })}
        >
          create new game
        </Button>
        <Button className={classes.animatedButton} variant='contained' size='large' color='secondary'>
          join existing game
        </Button>
        <CustomDialog
          handleClose={() => setDialog({ ...dialog, createGame: false })}
          handleSubmit={() => ({})}
          title='Create new game'
          open={dialog.createGame}
          btnText='Create Game'
        >
          <Box display='flex' alignItems='center' justifyContent='flex-end' p={1}>
            share game <LinkIcon className={classes.icon} />
          </Box>
          <TextField className={classes.textField} placeholder='player name' variant='filled' size='small' fullWidth />
          <TextField placeholder='group name' variant='filled' size='small' fullWidth />
        </CustomDialog>
      </Box>
    </>
  );
};

export default StartGame;
