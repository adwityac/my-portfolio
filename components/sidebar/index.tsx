import { Grid } from '@/components/icons';
import { SidebarMenuItem } from '@/components/sidebar-menu-item';
import { Tooltip } from '@/components/tooltip';
import { useAppSelector } from '@/redux/hooks';

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const favoriteApps = useAppSelector((state) => state.allApps);

  return (
    <div className="absolute left-0 top-0 z-40 flex h-full w-auto transform select-none flex-col items-center justify-start border-black border-opacity-60 bg-black bg-opacity-50 pt-7 duration-300">
      {favoriteApps.map((item) => (
        <Tooltip text={item.title} key={item.id} position="right">
          <SidebarMenuItem
            title={item.title}
            imageSrc={item.imageSrc}
            id={item.id}
            isOpen={item.isOpen}
          />
        </Tooltip>
      ))}
      <div
        className={`m-1 flex h-10 w-10 items-center justify-center rounded hover:bg-white hover:bg-opacity-10`}
        style={{ marginTop: 'auto' }}
      >
        <Tooltip position="top" text="Show Applications">
          <div className="relative">
            <Grid />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export { Sidebar };
