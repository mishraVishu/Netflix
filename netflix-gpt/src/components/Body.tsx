import Login from "./Login";
import Header from "./Header";

const Body = () => {
  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_medium.jpg')] bg-cover bg-no-repeat h-[100vh] w-full">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-10">
        <Header />
        <div className="flex justify-center items-center">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Body;