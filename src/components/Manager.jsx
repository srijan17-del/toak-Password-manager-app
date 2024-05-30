import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { MdCopyAll } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast, { Toaster } from "react-hot-toast";

const Manager = () => {
  const togglePassRef = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
      console.log(JSON.parse(passwords));
    }
  }, []);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  };

  /__ save password function __/;
  const savePassword = () => {
    // console.log(form);
    if (
      form.site === "" ||
      form.username === "" ||
      form.password === "" ||
      form.id === ""
    )
      return;
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    // console.log([...passwordArray, form]);
    toast.success("Password saved successfully");
    setform({ site: "", username: "", password: "" });
  };
  // Show hide password
  const togglePassword = () => {
    //implement show/hide using DOM
    // let togglePass = document.getElementById("togglePass");
    // let password = document.getElementById("password");
    // if (togglePass.innerHTML == "show") {
    //   togglePass.innerHTML = "hide";
    //   password.setAttribute("type", "text");
    // } else {
    //   togglePass.innerHTML = "show";
    //   password.setAttribute("type", "password");

    /--Implement ShowHide feature using useRef() --/;
    if (togglePassRef.current.innerHTML == "show") {
      togglePassRef.current.innerHTML = "hide";
      passwordRef.current.type = "text";
    } else {
      togglePassRef.current.innerHTML = "show";
      passwordRef.current.type = "password";
    }
  };

  /__ Copy to clipboard function __/;
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied to clipboard!`);
  };

  /__ delete password function __/;
  const deletePassword = (id) => {
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };

  /__ edit password function __/;
  const editPassword = (id) => {
    setform(passwordArray.find((item) => item.id === id));
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="mt-5 pt-5 ">
        <div className="  md:w-[200vh] items-center justify-center rounded flex flex-col mx-auto  ">
          <img className="mx-auto w-[5rem]" src="./images/Logo.png" alt="" />

          <span className="mx-auto mb-3 inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
            Your password manager
          </span>

          <div className="md:w-[150vh] mx-auto mt-5">
            <Input
              type="email"
              name="site"
              value={form.site}
              onChange={handleChange}
              placeholder="Enter Website URL"
              className="border-orange-500 "
            />
          </div>
          <div className="relative md:w-[150vh] mt-5 md:gap-12  flex flex-col md:flex-row  justify-center">
            <Input
              type="email"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username/Email"
              className="border-orange-500 "
            />

            <Input
              ref={passwordRef}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className=" border-orange-500 md:mt-0 mt-5"
              id="password"
            />
            <span
              ref={togglePassRef}
              className="absolute right-3 bottom-3 font-light text-sm cursor-pointer "
              onClick={togglePassword}
              id="togglePass"
            >
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
        <div className="md:w-[150vh] md:mx-auto mx-2 mt-9  ">
          <h1 className="font-medium text-xl tracking-tight mb-2 ">
            Your Passwords
          </h1>
          <Table className=" ">
            <TableHeader className="bg-orange-200 ">
              <TableRow>
                <TableHead className="">Site URL</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passwordArray.map((item, index) => {
                return (
                  <TableRow key={index} className="bg-orange-50   ">
                    <TableCell className="flex  items-center gap-3 ">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <MdCopyAll
                        className="cursor-pointer hover:text-black/60 duration-150"
                        size={"1.1rem"}
                        onClick={() => {
                          copyToClipboard(item.site);
                        }}
                      />
                    </TableCell>
                    <TableCell className="">
                      <div className="flex  items-center gap-3">
                        <p>{item.username}</p>
                        <MdCopyAll
                          className="cursor-pointer hover:text-black/60 duration-150"
                          size={"1.1rem"}
                          onClick={() => {
                            copyToClipboard(item.username);
                          }}
                        />
                      </div>
                    </TableCell>

                    <TableCell className="">
                      <div className="flex  items-center gap-3">
                        <p>{item.password}</p>
                        <MdCopyAll
                          className="cursor-pointer hover:text-black/60 duration-150"
                          size={"1.1rem"}
                          onClick={() => {
                            copyToClipboard(item.password);
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="">
                      <div className="flex  items-center gap-3">
                        <RiEdit2Fill
                          className="cursor-pointer hover:text-black/60 duration-150"
                          size={"1.1rem"}
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        />

                        <MdDelete
                          className="cursor-pointer hover:text-black/60 duration-150"
                          size={"1.1rem"}
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        />
                      </div>
                    </TableCell>
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
