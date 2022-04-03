import Link from 'next/link';
import { EuiBadge, EuiHorizontalRule, EuiTitle, EuiLink } from '@elastic/eui';
import moment from 'moment';
import { IKImage, IKContext } from 'imagekitio-react';

function PostPreviewList({ posts }) {
  return (
    <div className="block">
      {posts.map((res) => (
        <article key={res.id}>
          <div className="mt-12px mb-32px">
            <EuiHorizontalRule margin="none" />
          </div>
          <div className="block">
            <div className="flex items-center">
              <div className="flex w-full flex-nowrap">
                <div className="block">
                  <Link
                    href={{
                      pathname: '/blog/[slug]',
                      query: {
                        slug: res.properties.Title.rich_text[0].plain_text,
                      },
                    }}
                    passHref
                  >
                    <EuiLink color="subdued">
                      {moment(res.created_time).format('MMM D, YYYY')}
                    </EuiLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block mt-12px">
              <div className="block">
                <div className="block relative">
                  <div className="opacity-100">
                    <div className="block">
                      <div>
                        <div className="flex">
                          <div className="block flex-auto break-words">
                            <div className="block">
                              <Link
                                href={{
                                  pathname: '/blog/[slug]',
                                  query: {
                                    slug: res.properties.Title.rich_text[0]
                                      .plain_text,
                                  },
                                }}
                                passHref
                              >
                                <EuiLink
                                  aria-label="Post Preview Title"
                                  rel="noopener follow"
                                  className="!text-[inherit] !hover:no-underline"
                                >
                                  <div className="block pb-0 md:(pb-8px)">
                                    <EuiTitle className="!text-lg line-clamp-2 md:(!text-2xl line-clamp-3)">
                                      <h2>
                                        {
                                          res.properties.Name.title[0]
                                            .plain_text
                                        }
                                      </h2>
                                    </EuiTitle>
                                  </div>
                                  <div className="hidden md:(block)">
                                    <p className="overflow-hidden line-clamp-2 leading-normal">
                                      {Array.isArray(
                                        res.properties.Description.rich_text,
                                      ) &&
                                      res.properties.Description.rich_text
                                        .length
                                        ? res.properties.Description
                                            .rich_text[0].plain_text
                                        : null}
                                    </p>
                                  </div>
                                </EuiLink>
                              </Link>
                            </div>
                            <div className="block py-16px">
                              <div className="flex justify-between">
                                <div className="flex flex-auto">
                                  <div className="block">
                                    <EuiBadge>
                                      {res.properties.Category.select.name}
                                    </EuiBadge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {Array.isArray(res.properties.Cover.rich_text) &&
                          res.properties.Cover.rich_text.length ? (
                            <div className="block ml-24px md:(ml-60px)">
                              <Link
                                href={{
                                  pathname: '/blog/[slug]',
                                  query: {
                                    slug: res.properties.Title.rich_text[0]
                                      .plain_text,
                                  },
                                }}
                                passHref
                              >
                                <EuiLink
                                  aria-label="Post Preview Image"
                                  rel="noopener follow"
                                >
                                  <div className="block md:hidden">
                                    <IKContext urlEndpoint="https://ik.imagekit.io/tlk1n6viqhs">
                                      <IKImage
                                        path={`/${res.properties.Cover.rich_text[0].plain_text}`}
                                        transformation={[
                                          {
                                            height: '56',
                                            width: '56',
                                          },
                                        ]}
                                        className="align-middle"
                                        role="presentation"
                                        width="56"
                                        height="56"
                                        alt={
                                          res.properties.Name.title[0]
                                            .plain_text
                                        }
                                      />
                                    </IKContext>
                                  </div>
                                  <div className="hidden md:(block)">
                                    <IKContext urlEndpoint="https://ik.imagekit.io/tlk1n6viqhs">
                                      <IKImage
                                        path={`/${res.properties.Cover.rich_text[0].plain_text}`}
                                        transformation={[
                                          {
                                            height: '112',
                                            width: '112',
                                          },
                                        ]}
                                        className="align-middle"
                                        role="presentation"
                                        width="112"
                                        height="112"
                                        alt={
                                          res.properties.Name.title[0]
                                            .plain_text
                                        }
                                      />
                                    </IKContext>
                                  </div>
                                </EuiLink>
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PostPreviewList;
