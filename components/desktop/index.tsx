import { ShowApplications } from '@/components/show-applications';
import { BackgroundImage } from '@/components/background-image';
import { useAppSelector } from '@/redux/hooks';
import DesktopIconsRight from '@/components/desktop/desktop-icons-right';
import { Sidebar } from '../sidebar';
import { BootScreen } from '@/components/boot-screen';
import { StatusCard } from '@/components/status-card';
import { useEffect, useState } from 'react';
import ContextMenu from '@/components/context-menu';

interface DesktopProps {}

const Desktop = ({}: DesktopProps) => {
  const { backgroundImage } = useAppSelector((state) => state.backgroundImage);
  const showApps = useAppSelector((state) => state.ui.showApplications);
  const [booting, setBooting] = useState(true);

  const brightnessLevel = useAppSelector(
    (state) => state.status.brightnessLevel,
  );

  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

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
    <div
      className="relative h-screen w-screen overflow-hidden"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenu({ x: e.clientX, y: e.clientY });
      }}
    >
      <BackgroundImage
        backgroundImage={backgroundImage}
        brightnessLevel={brightnessLevel}
      />
      <Sidebar />
      <DesktopIconsRight />

      {showApps && <ShowApplications />}

      {/* 🖱️ Right-click context menu */}
      {menu && (
        <ContextMenu x={menu.x} y={menu.y} onClose={() => setMenu(null)} />
      )}
    </div>
  );
};

export { Desktop };
