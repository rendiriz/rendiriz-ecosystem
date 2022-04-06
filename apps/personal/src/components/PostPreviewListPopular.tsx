/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { EuiLink } from '@elastic/eui';
import { IKImage, IKContext } from 'imagekitio-react';

function PostPreviewListPopular({ posts }) {
  return (
    <div className="block">
      {posts.map((res) => (
        <article key={res.id}>
          <div className="w-full h-full">
            <div className="flex flex-col justify-center mb-20px">
              <div className="flex flex-row">
                {res.cover && (
                  <Link
                    href={{
                      pathname: '/blog/[id]',
                      query: {
                        id: res.idPost,
                      },
                    }}
                    passHref
                  >
                    <EuiLink
                      aria-label="Post Preview Image"
                      rel="noopener follow"
                    >
                      <IKContext urlEndpoint="https://ik.imagekit.io/tlk1n6viqhs">
                        <IKImage
                          path={`/${res.cover}`}
                          transformation={[
                            {
                              height: '58',
                              width: '58',
                            },
                          ]}
                          className="mt-3px mr-8px align-middle max-w-58px"
                          role="presentation"
                          width="58"
                          height="58"
                          alt={res.name}
                        />
                      </IKContext>
                    </EuiLink>
                  </Link>
                )}
                <div className="flex flex-col">
                  <Link
                    href={{
                      pathname: '/blog/[id]',
                      query: {
                        id: res.idPost,
                      },
                    }}
                    passHref
                  >
                    <EuiLink
                      aria-label="Post Preview Title"
                      rel="noopener follow"
                      className="!text-[inherit] !hover:no-underline !focus:no-underline"
                    >
                      <div className="text-sm font-bold leading-snug line-clamp-3 mb-8px">
                        {res.name}
                      </div>
                      <div className="text-sm line-clamp-1">
                        {res.description}
                      </div>
                    </EuiLink>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PostPreviewListPopular;
