"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  active: boolean;
  label: string;
  href: string;
}

export const SidebarItem = ({ label, href, active }: SidebarItemProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:dark:text-white hover:bg-slate-300/20",
        active &&
          "text-black dark:text-white bg-gray-200/20 hover:bg-gray-200/20 hover:text-gray-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">{label}</div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-black dark:border-white h-full transition-all",
          active && "opacity-100"
        )}
      />
    </button>
  );
};
