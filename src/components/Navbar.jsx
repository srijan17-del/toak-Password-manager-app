const Navbar = () => {
  return (
    <div className=" navbar h-[5rem]  flex items-center justify-between px-20 bg-slate-300 shadow ">
      <div>
        <img className="w-24" src="./images/Logo.png" alt="" />
      </div>
      <ul className="flex gap-5 ">
        <li className="hover:text-black/65 cursor-pointer">Home</li>
        <li className="hover:text-black/65 cursor-pointer">About</li>
        <li className="hover:text-black/65 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
