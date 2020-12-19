// packages

import React, { useState } from 'react';

// UI-Material components

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';

// code

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MaterialToast() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="quiz-toast">
      <CheckCircleTwoToneIcon onClick={handleClick}></CheckCircleTwoToneIcon>
      <ErrorTwoToneIcon onClick={handleClose}></ErrorTwoToneIcon>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Success placeholder</Alert>
      </Snackbar>
      {/* <Alert severity="error">Error placeholder</Alert> */}
    </div>
  );
}
