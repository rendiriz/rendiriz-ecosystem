import Link from 'next/link';
import { EuiBadge, EuiHorizontalRule, EuiTitle, EuiLink } from '@elastic/eui';

import { title, category } from '@/lib/notion';

interface Props {
  posts?: any;
  closeModal?: any;
}

function NotesPreviewList({ posts, closeModal }: Props) {
  return (
    <div className="block">
      {posts.map((res) => (
        <article key={res.id}>
          <div className="mt-12px mb-32px">
            <EuiHorizontalRule margin="none" />
          </div>
          <div className="block">
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
                                  pathname: '/notes/[id]',
                                  query: {
                                    id: res.id,
                                  },
                                }}
                                passHref
                              >
                                <EuiLink
                                  aria-label="Notes Preview Title"
                                  rel="noopener follow"
                                  className="!text-[inherit] !hover:no-underline !focus:no-underline"
                                  onClick={closeModal}
                                >
                                  <div className="block pb-0 md:(pb-8px)">
                                    <EuiTitle className="!text-lg line-clamp-2 md:(!text-2xl line-clamp-3)">
                                      <h2>{title(res.properties.Name)}</h2>
                                    </EuiTitle>
                                  </div>
                                </EuiLink>
                              </Link>
                            </div>
                            <div className="block py-8px">
                              <div className="flex justify-between">
                                <div className="flex flex-auto">
                                  <div className="block">
                                    <EuiBadge>
                                      {category(res.properties.Category)}
                                    </EuiBadge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default NotesPreviewList;
