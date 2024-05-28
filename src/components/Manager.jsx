import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    console.log(form);
    if (form.site === "" || form.username === "" || form.password === "")
      return;
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  return (
    <>
      <div>
        <div className="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="mt-5 pt-5 ">
        <div className="  w-[200vh] items-center justify-center rounded flex flex-col mx-auto  ">
          <img className="mx-auto w-[5rem]" src="./images/Logo.png" alt="" />

          <span className="mx-auto mb-3 inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
            Your password manager
          </span>

          <div className="w-[150vh] mx-auto mt-5">
            <Input
              type="email"
              name="site"
              value={form.site}
              onChange={handleChange}
              placeholder="Enter Website URL"
              className="border-orange-500 "
            />
          </div>
          <div className="relative w-[150vh] mt-5 gap-12  flex   justify-center">
            <Input
              type="email"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username/Email"
              className="border-orange-500 "
            />

            <Input
              type="email"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className=" border-orange-500 "
            />
            <span className="absolute right-3 bottom-3 font-light text-sm cursor-pointer ">
              show
            </span>
          </div>
          <div
            onClick={savePassword}
            className=" mt-5 flex items-center rounded cursor-pointer hover:bg-orange-300 bg-orange-400 duration-150  "
          >
            <lord-icon
              src="https://cdn.lordicon.com/xgazwbsi.json"
              trigger="hover"
              colors="primary:#e88c30,secondary:#e88c30,tertiary:#ebe6ef"
              className=""
            ></lord-icon>
          </div>
        </div>
        <div className="w-[150vh] mx-auto mt-9 ">
          <h1 className="font-medium text-xl tracking-tight mb-2 ">
            Your Passwords
          </h1>
          <Table className=" ">
            <TableHeader className="bg-orange-200 ">
              <TableRow>
                <TableHead className="">Site URL</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passwordArray.map((item, index) => {
                return (
                  <TableRow key={index} className="bg-orange-50">
                    <TableCell className="">{item.site}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.password}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Manager;
