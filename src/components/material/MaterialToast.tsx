// packages

import React, { useState } from 'react';

// UI-Material components

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';

// code

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MaterialToast() {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(true);
  };

  const closeHandler = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="quiz-toast mobile-off">
      <ErrorTwoToneIcon
        onClick={clickHandler}
        className="quiz-error material-icon"
      ></ErrorTwoToneIcon>
      <Snackbar open={open} autoHideDuration={3000} onClose={closeHandler}>
        <Alert severity="success">Success placeholder</Alert>
      </Snackbar>
      {/* <Alert severity="error">Error placeholder</Alert> */}
    </div>
  );
}
