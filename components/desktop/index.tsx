import { ShowApplications } from '@/components/show-applications';
import { BackgroundImage } from '@/components/background-image';
import { useAppSelector } from '@/redux/hooks';
import DesktopIconsRight from '@/components/desktop/desktop-icons-right';
import { Sidebar } from '../sidebar';
import { BootScreen } from '@/components/boot-screen';
import { StatusCard } from '@/components/status-card';
import { useEffect, useState } from 'react';

interface DesktopProps {}

const Desktop = ({}: DesktopProps) => {
  const { backgroundImage } = useAppSelector((state) => state.backgroundImage);
  const showApps = useAppSelector((state) => state.ui.showApplications);
  const [booting, setBooting] = useState(true);

  const brightnessLevel = useAppSelector(
    (state) => state.status.brightnessLevel,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2500); // ⏱ 2.5s boot time

    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return <BootScreen />;
  }

  return (
    <div>
      <BackgroundImage backgroundImage={backgroundImage} />
      <Sidebar />
      <DesktopIconsRight />
      {showApps && <ShowApplications />}

      <div
        className="pointer-events-none fixed inset-0 z-[9999] bg-black transition-opacity duration-300"
        style={{
          opacity: Math.min(0.85, 1 - brightnessLevel / 100),
        }}
      />
    </div>
  );
};

export { Desktop };
