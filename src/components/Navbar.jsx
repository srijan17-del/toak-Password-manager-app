import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" w-[154vh] mx-auto navbar sticky  h-[3rem]  flex items-center justify-between px-6 bg-[#ffebbb] shadow-lg rounded-md">
      <div>
        <img className="w-16" src="./images/Logo.png" alt="" />
      </div>
      {/* <ul className="flex gap-5 ">
        <li className="hover:text-black/65 cursor-pointer">Home</li>
        <li className="hover:text-black/65 cursor-pointer">About</li>
        <li className="hover:text-black/65 cursor-pointer">Contact</li>
      </ul> */}
      <FaGithub className="cursor-pointer" size={"2rem"} />
    </div>
  );
};

export default Navbar;
