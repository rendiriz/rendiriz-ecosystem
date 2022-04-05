import NavbarDefault from '@/templates/navbar/Default';

function Home({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      {children}
      <footer className="bg-gray-100">
        <div className="container mx-auto w-full py-12 px-2">Footer</div>
      </footer>
    </div>
  );
}

export default Home;
