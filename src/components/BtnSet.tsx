import React from 'react';
import Button from '@material-ui/core/Button';

export const BtnCta = () => {
  return (
    <Button className="btn-cta" variant="contained">
      <span>Call to action</span>
    </Button>
  );
};

export const BtnSide = () => {
  return (
    <Button className="btn-side" variant="outlined">
      <span>Side</span>
    </Button>
  );
};
