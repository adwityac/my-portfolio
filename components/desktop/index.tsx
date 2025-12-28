import { BackgroundImage } from '@/components/background-image';
import { Sidebar } from '@/components/sidebar';
import { useAppSelector } from '@/redux/hooks';
import DesktopIconsRight from '@/components/desktop/desktop-icons-right';

interface DesktopProps {}

const Desktop = ({}: DesktopProps) => {
  const { backgroundImage } = useAppSelector((state) => state.backgroundImage);
  return (
    <div>
      <BackgroundImage backgroundImage={backgroundImage} />
      <Sidebar />
      <DesktopIconsRight />
    </div>
  );
};

export { Desktop };
