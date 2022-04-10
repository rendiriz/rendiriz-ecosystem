import NavbarDefault from '@/templates/navbar/Default';
import SidebarPostLeft from '@/templates/sidebar/PostLeft';
import SidebarNotesRight from '@/templates/sidebar/NotesRight';
import FooterBlog from '@/templates/footer/Blog';

function Notes({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <div className="container mx-auto pt-48px">
        <div className="flex flex-col lg:flex-row justify-between">
          <SidebarPostLeft from="notes" />
          <main className="block flex-auto min-w-0">
            <div className="block">
              <div className="block mb-40 md:(mb-100px)">
                <div className="flex justify-center">
                  <div className="w-full min-w-0 mx-4 md:(max-w-692px mx-6)">
                    <article>{children}</article>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <SidebarNotesRight />
        </div>
      </div>
      <div className="block lg:(hidden)">
        <FooterBlog />
      </div>
    </div>
  );
}

export default Notes;
