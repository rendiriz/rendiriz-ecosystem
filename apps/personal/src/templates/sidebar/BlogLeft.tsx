import Link from 'next/link';

import { EuiLink, useEuiTheme } from '@elastic/eui';
import { borderRight } from '@/config/border';

function BlogLeft() {
  const { euiTheme } = useEuiTheme();

  return (
    <div
      style={borderRight(euiTheme.colors.lightShade)}
      className="w-auto lg:(w-80px flex-shrink min-h-screen)"
    >
      <nav className="h-full">
        <div className="block lg:(hidden)">small</div>
        <div className="hidden h-full lg:(block)">
          <div className="sticky flex flex-col z-1 top-48px h-[calc(100vh_-_48px)] justify-between">
            <div className="py-40px text-center">
              <Link href="/" passHref>
                <EuiLink color="subdued">cd ~</EuiLink>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BlogLeft;
