"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";

function Register() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-black">
        <form className="bg-[#0B1020] border border-[#2A3555] p-4 rounded-xl w-110 2xl:w-120 mx-[4%] hover:border-(--prim)">
          <h1 className="text-white text-xl sm:text-2xl Inter font-semibold text-center pt-1">
            {t("register")}
          </h1>

          <div className="flex items-center gap-2 pt-6">
            <input
              type="text"
              placeholder={t("first_name")}
              className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-black/40 outline-none"
            />

            <input
              type="text"
              placeholder={t("last_name")}
              className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-black/40 outline-none"
            />
          </div>

          <input
            type="tel"
            placeholder="+998 (90) 123-4567"
            className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-black/40 outline-none mt-3"
          />

          <input
            type="email"
            placeholder={t("email")}
            className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-black/40 outline-none mt-3"
          />

          <div className="relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("password")}
              className="w-full py-2 px-4 border border-[#2A3555] focus:border-[#b6ff3b] text-gray-300 rounded-lg bg-black/40 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="button"
            className="my-6 flex items-center justify-center gap-2 bg-(--prim) py-2 w-full Inter rounded-lg font-semibold text-black hover:bg-[#a5e635] transition-all duration-300 cursor-pointer text-lg"
          >
            {t("register")}
          </button>

          <p className="text-center text-[#FFFFFF] text-sm mb-2">
            {t("already_have_account")}{" "}
            <Link
              href="/UI/Login"
              className="text-lime-300 hover:text-lime-400 transition-colors duration-300"
            >
              {t("login")}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
