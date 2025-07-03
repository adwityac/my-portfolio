import React from 'react';

import { AudioVolume, Battery, Wifi } from '../icons';

interface StatusProps {}

const Status = ({}: StatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <Wifi />
      <AudioVolume />
      <Battery />
      <div>80 %</div>
    </div>
  );
};

export { Status };
