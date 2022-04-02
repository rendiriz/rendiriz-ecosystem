import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EuiTitle } from '@elastic/eui';
import { IKImage, IKContext } from 'imagekitio-react';
import FooterBlog from '@/templates/footer/Blog';

const EuiFieldText = dynamic(
  () => import('@elastic/eui').then((mod) => mod.EuiFieldText),
  {
    ssr: false,
  },
);

function BlogRight() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="hidden w-394px min-h-screen px-32px xl:block">
      <div className="h-full w-full inline-block relative">
        <div className="block">
          <div className="flex flex-col min-h-screen">
            <div className="block pt-40px">
              <EuiFieldText
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e)}
                aria-label="Use aria labels when no actual label is in use"
              />
            </div>

            <div className="block">
              <div className="mt-32px mb-14px">
                <EuiTitle size="xs">
                  <h3>Popular</h3>
                </EuiTitle>
              </div>
              <div className="block">
                <div className="w-full h-full">
                  <div className="flex flex-col justify-center mb-20px">
                    <div className="flex flex-row">
                      <IKContext urlEndpoint="https://ik.imagekit.io/tlk1n6viqhs">
                        <IKImage
                          path="/default-image.jpg"
                          transformation={[
                            {
                              height: '58',
                              width: '58',
                            },
                          ]}
                          className="mt-3px mr-8px align-middle"
                          role="presentation"
                          width="58"
                          height="58"
                        />
                      </IKContext>
                      <div className="flex flex-col">
                        <div className="text-sm font-bold leading-snug line-clamp-3 mb-8px">
                          <div>
                            This is a large title, only one should exist per
                            page only one should exist per page
                          </div>
                        </div>
                        <div className="text-sm line-clamp-1">
                          <div>
                            This is a large title, only one should exist per
                            page
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block">
              <FooterBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRight;
