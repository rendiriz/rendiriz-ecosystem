import NavbarDefault from '@/templates/navbar/Default';
import SidebarBlogPostLeft from '@/templates/sidebar/BlogPostLeft';
import SidebarBlogRight from '@/templates/sidebar/BlogRight';
import FooterBlog from '@/templates/footer/Blog';

function Blog({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <div className="container mx-auto pt-48px">
        <div className="flex flex-col lg:flex-row justify-between">
          <SidebarBlogPostLeft />
          <main className="block flex-auto min-w-0">
            <div className="block">
              <div className="block mb-80 md:(mb-40px)">
                <div className="flex justify-center">
                  <div className="w-full min-w-0 mx-4 md:(max-w-692px mx-6)">
                    <article>{children}</article>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <SidebarBlogRight />
        </div>
      </div>
      <div className="block lg:(hidden)">
        <FooterBlog />
      </div>
    </div>
  );
}

export default Blog;
