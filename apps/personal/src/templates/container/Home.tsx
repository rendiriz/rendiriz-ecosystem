import NavbarDefault from '@/templates/navbar/Default';
import FooterDefault from '@/templates/footer/Default';

function Home({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      {children}
      <FooterDefault />
    </div>
  );
}

export default Home;
