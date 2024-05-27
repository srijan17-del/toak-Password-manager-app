import { Input } from "@/components/ui/input";

const Manager = () => {
  return (
    <div className="mt-5 pt-5 ">
      <div className="  w-[200vh] items-center justify-center rounded flex flex-col mx-auto  ">
        <img className="mx-auto w-[5rem]" src="./images/Logo.png" alt="" />

        <span className="mx-auto mb-3 inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
          Your password manager
        </span>

        <div className="w-[150vh] mx-auto mt-5">
          <Input
            type="email"
            placeholder="Enter Website URL"
            className="border-orange-500 "
          />
        </div>
        <div className="w-[150vh] mt-5 gap-12  flex   justify-center">
          <Input
            type="email"
            placeholder="Enter Username/Email"
            className="border-orange-500 "
          />

          <Input
            type="email"
            placeholder="Enter Password"
            className="relative border-orange-500 "
          />
          <span className="absolute right-[14rem] mb-4">8</span>
        </div>
        <div className=" mt-5 flex items-center rounded cursor-pointer hover:bg-orange-300 bg-orange-400 duration-150  ">
          <lord-icon
            src="https://cdn.lordicon.com/xgazwbsi.json"
            trigger="hover"
            colors="primary:#e88c30,secondary:#e88c30,tertiary:#ebe6ef"
            className=""
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};

export default Manager;
