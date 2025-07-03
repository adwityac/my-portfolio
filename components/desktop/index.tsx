import { BackgroundImage } from '@/components/background-image';
import { Sidebar } from '@/components/sidebar';
import { useAppSelector } from '@/redux/hooks';

interface DesktopProps {}

const Desktop = ({}: DesktopProps) => {
  const { backgroundImage } = useAppSelector((state) => state.backgroundImage);
  return (
    <div>
      <BackgroundImage backgroundImage={backgroundImage} />
      <Sidebar />
    </div>
  );
};

export { Desktop };
