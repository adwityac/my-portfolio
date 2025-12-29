import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { closeApplications, toggleStatusMenu } from '@/redux/features/ui-slice';
import { AudioVolume, Battery, Wifi } from '../icons';

interface StatusProps {}

const Status = ({}: StatusProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-2"
      onClick={() => {
        dispatch(closeApplications());   
        dispatch(toggleStatusMenu());    
      }}
    >
      <Wifi />
      <AudioVolume />
      <Battery />
      <div>80 %</div>
    </div>
  );
};

export { Status };
