"use client";

import useParticipantStore from "@/store/use-participant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface props {
  href: string;
  title: string;
  icon: ReactNode;
}

export const SideBarItem: React.FC<props> = ({ href, title, icon }) => {
  const { setLogged, showSideBar } = useParticipantStore((state) => state);
  const router = useRouter();
  const clickSignOut = () => {
    showSideBar(false);
    sessionStorage.removeItem("auth_hash");
    setLogged(false);
  };
  if (href !== "#")
    return (
      <Link
        href={href}
        className="py-2 px-4 hover:bg-gray-100 rounded-md flex flex-row gap-2"
        onClick={() => showSideBar(false)}
      >
        {icon}
        {title}
      </Link>
    );
  else
    return (
      <div
        className="py-2 px-4 hover:bg-gray-100 rounded-md flex flex-row gap-2 cursor-pointer"
        onClick={clickSignOut}
      >
        {icon}
        {title}
      </div>
    );
};
