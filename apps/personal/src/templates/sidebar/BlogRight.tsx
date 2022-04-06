import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  EuiLoadingSpinner,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
} from '@elastic/eui';
import { useQuery } from 'react-query';

import FooterBlog from '@/templates/footer/Blog';
import PostPreviewList from '@/components/PostPreviewList';
import PostPopular from '@/components/PostPopular';
import useDebounce from '@/hooks/useDebounce';

const EuiFieldText = dynamic(
  () => import('@elastic/eui').then((mod) => mod.EuiFieldText),
  {
    ssr: false,
  },
);

const getPosts = async (search): Promise<any> => {
  const res = await fetch(`/api/search?q=${search}`);
  return res.json();
};

function BlogRight() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, error, status } = useQuery<any, Error>(
    ['posts', debouncedSearchTerm],
    () => getPosts(debouncedSearchTerm),
    {
      enabled: isSearching,
    },
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal style={{ width: 800 }} onClose={closeModal}>
        <EuiModalHeader />

        <EuiModalBody>
          <EuiFieldText
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search"
            fullWidth
          />
          <div className="mt-24px">
            {status === 'loading' ? (
              <div className="block flex justify-center mt-48px mb-36px">
                <EuiLoadingSpinner size="xxl" />
              </div>
            ) : status === 'error' ? (
              <div className="block flex justify-center mt-48px mb-36px">
                <p>Error: {error.message}</p>
              </div>
            ) : (
              <div>
                {data && data.length > 0 ? (
                  <PostPreviewList posts={data} closeModal={closeModal} />
                ) : (
                  <div className="block flex justify-center mt-48px mb-36px">
                    <p>No results found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </EuiModalBody>
      </EuiModal>
    );
  }

  return (
    <div className="hidden w-394px min-h-screen px-32px xl:block">
      <div className="h-full w-full inline-block relative">
        <div className="block">
          <div className="flex flex-col min-h-screen">
            <div className="block pt-40px">
              <EuiFieldText
                placeholder="Search"
                onClick={showModal}
                aria-label="Search"
                className="!cursor-pointer"
                readOnly
              />
              {modal}
            </div>

            <div className="block mt-32px">
              <PostPopular />
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
