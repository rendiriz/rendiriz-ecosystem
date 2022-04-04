import { EuiText, EuiTitle } from '@elastic/eui';
import moment from 'moment';
import { IKImage, IKContext } from 'imagekitio-react';

function PostHeader({ createdTime, name, cover }) {
  return (
    <>
      <header className="block mt-48px mb-24px">
        <EuiText size="s" color="subdued" className="mb-3">
          {moment(createdTime).format('MMM D, YYYY')}
        </EuiText>
        <div className="mb-2">
          <EuiTitle size="l">
            <h1>{name}</h1>
          </EuiTitle>
        </div>
      </header>
      {cover && (
        <div className="block mb-32px">
          <IKContext urlEndpoint="https://ik.imagekit.io/tlk1n6viqhs">
            <IKImage
              path={`/${cover}`}
              className="align-middle"
              role="presentation"
              width="100%"
              alt={name}
            />
          </IKContext>
        </div>
      )}
    </>
  );
}

export default PostHeader;
