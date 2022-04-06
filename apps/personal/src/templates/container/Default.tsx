import NavbarDefault from '@/templates/navbar/Default';
import FooterDefault from '@/templates/footer/Default';

function Default({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <main className="w-full pt-48px">
        <div className="container mx-auto w-full py-12 px-8 lg:(px-2)">
          {children}
        </div>
      </main>
      <FooterDefault />
    </div>
  );
}

export default Default;
