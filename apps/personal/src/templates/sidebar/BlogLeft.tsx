import Link from 'next/link';

import { EuiLink } from '@elastic/eui';

function BlogLeft() {
  return (
    <div className="w-auto lg:(w-80px flex-shrink min-h-screen)">
      <nav className="h-full">
        <div className="block lg:(hidden)">small</div>
        <div className="hidden h-full lg:(block)">
          <div className="sticky flex flex-col z-1 top-0 h-screen justify-between">
            <div className="py-40px text-center">
              <Link href="/" passHref>
                <EuiLink>
                  <svg viewBox="0 0 1043.63 592.71" className="inline h-23px">
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                      </g>
                    </g>
                  </svg>
                </EuiLink>
              </Link>
            </div>
          </div>
        </div>
        <div className="block lg:(hidden)">small</div>
      </nav>
    </div>
  );
}

export default BlogLeft;
