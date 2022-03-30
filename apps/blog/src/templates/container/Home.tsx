import SidebarLeft from '@/templates/sidebar/Left';
import SidebarRight from '@/templates/sidebar/Right';

import { useEuiTheme } from '@elastic/eui';

function Home({ children }) {
  const { euiTheme } = useEuiTheme();

  const borderRight = {
    borderRight: `1px solid ${euiTheme.colors.lightShade}`,
  };

  const borderLeft = {
    borderLeft: `1px solid ${euiTheme.colors.lightShade}`,
  };

  return (
    <div className="block">
      <div className="container m-auto block">
        <div className="flex flex-col justify-between lg:(flex-row)">
          <div style={borderRight} className="min-h-screen flex-shrink w-80px">
            <SidebarLeft />
          </div>
          <main className="block flex-auto min-w-0">{children}</main>
          <div style={borderLeft} className="hidden lg:block w-395px min-h-screen px-32px">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
