import { Grid } from '@/components/icons';
import { SidebarMenuItem } from '@/components/sidebar-menu-item';
import { Tooltip } from '@/components/tooltip';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleApplications } from '@/redux/features/ui-slice';

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const sidebarApps = useAppSelector((state) =>
    state.allApps.filter(
      (app) =>
        app.isFavorite ||
        (app.isOpen && (app.slug === 'trash' || app.slug === 'contact-me')),
    ),
  );

  const dispatch = useAppDispatch();

  return (
    <div className="absolute left-0 top-0 z-40 flex h-full w-auto select-none flex-col items-center border-black border-opacity-60 bg-black bg-opacity-50 pt-7 duration-300">
      {/* 🔝 Top apps */}
      {sidebarApps.map((item) => (
        <Tooltip text={item.title} key={item.id} position="right">
          <SidebarMenuItem
            title={item.title}
            imageSrc={item.imageSrc}
            id={item.id}
            isOpen={item.isOpen}
          />
        </Tooltip>
      ))}

      {/* 🧲 Spacer pushes button to bottom */}
      <div className="flex-1" />

      {/* ⬇️ Bottom-left Show Applications */}
      <div className="mb-8 flex items-center justify-center">
        <Tooltip position="right" text="Show Applications">
          <button
            onClick={() => dispatch(toggleApplications())}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-lg
              transition hover:bg-white
              hover:bg-opacity-10
            "
          >
            <Grid />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export { Sidebar };
