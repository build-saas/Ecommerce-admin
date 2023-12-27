import { SidebarRoutes } from "@/components/sidebar-route";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white dark:bg-[#020817] shadow-sm">
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
