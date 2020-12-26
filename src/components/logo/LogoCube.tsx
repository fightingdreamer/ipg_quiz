// packages

import React from 'react';

// components

import { LogoLayers } from './LogoLayers';

// code

export const LogoCube = ({ value, index }: { value: any; index: any }) => {
  const elements: Array<string> = ['1', '2', '3'];
  return (
    <>
      {elements.map((value, index) => {
        return (
          <div className="cube-wrapper" key={index}>
            <div className={`cube-item cube-x${index + 1} cube-y1 cube-z1`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y1 cube-z2`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y1 cube-z3`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y2 cube-z1`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y2 cube-z2`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y2 cube-z3`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y3 cube-z1`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y3 cube-z2`}>
              <LogoLayers />
            </div>
            <div className={`cube-item cube-x${index + 1} cube-y3 cube-z3`}>
              <LogoLayers />
            </div>
          </div>
        );
      })}
    </>
  );
};
