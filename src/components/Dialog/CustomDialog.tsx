import React, { FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';

interface DialogProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  title: string;
  btnText: string;
}

const useStyles = makeStyles(theme => ({
  buttonSpace: {
    marginRight: theme.spacing(2),
  },
  dialogTitle: {
    fontWeight: 600,
  },
  actionsPadding: {
    padding: theme.spacing(3),
  },
}));

const CustomDialog: FC<DialogProps> = ({ open, title, btnText, handleClose, handleSubmit, children }) => {
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open} maxWidth='sm' fullWidth>
      <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.actionsPadding}>
        <Button className={classes.buttonSpace} color='primary' variant='text' size='small' onClick={(): void => handleClose()}>
          Cancel
        </Button>
        <Button
          color='primary'
          variant='contained'
          size='small'
          onClick={(): void => {
            handleSubmit();
          }}
        >
          {btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
