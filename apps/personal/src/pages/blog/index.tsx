import ContainerHome from '@/templates/container/Home';
import { EuiButton } from '@elastic/eui';

function Blog() {
  return (
    <>
      <p>Blog works!</p>
      <div className="py-500px">asdf</div>
      <EuiButton fill>Docs</EuiButton>
    </>
  );
}

Blog.Layout = function getLayout(page) {
  return <ContainerHome>{page}</ContainerHome>;
};

export default Blog;
