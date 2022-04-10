import NavbarDefault from '@/templates/navbar/Default';
import SidebarNotesLeft from '@/templates/sidebar/NotesLeft';
import SidebarNotesRight from '@/templates/sidebar/NotesRight';
import FooterBlog from '@/templates/footer/Blog';

function Notes({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <div className="container mx-auto pt-48px px-2">
        <div className="flex flex-col lg:flex-row justify-between">
          <SidebarNotesLeft />
          <main className="block flex-auto min-w-0">
            <div className="block">
              <div className="block mb-80 md:(mb-40px)">
                <div className="flex justify-center">
                  <div className="w-full min-w-0 mx-4 md:(max-w-692px mx-6)">
                    {children}
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
