import NavbarDefault from '@/templates/navbar/Default';
import SidebarBlogLeft from '@/templates/sidebar/BlogLeft';

function Blog({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <div className="container mx-auto pt-48px px-2">
        <div className="flex flex-col lg:flex-row justify-between">
          <SidebarBlogLeft />
          <main>{children}</main>
          <div>Right</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
