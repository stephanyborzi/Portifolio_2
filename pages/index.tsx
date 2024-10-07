import Nav from "../Components/Nav";
const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <main className="p-4">
        <h1 className="text-2xl font-bold ">Welcome to the Home Page</h1>
        <p className="mt-2">Here is some content for your home page!</p>
      </main>
    </div>
  );
};

export default HomePage;
