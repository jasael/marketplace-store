"use client";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { GalleryVerticalIcon } from "lucide-react";
import UserActions from "./components/user-actions";
import SearchBar from "./components/search-bar";

export default function AppHeader() {
  const { isMobile } = useSidebar();

  return (
    <header className="flex h-16 shadow sticky top-0 bg-sidebar">
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between gap-2 px-4">
        <div className="flex gap-2">
          {isMobile && <SidebarTrigger className="-ml-1" />}
          <GalleryVerticalIcon />
        </div>

        <SearchBar />

        <UserActions />
      </div>
    </header>
  );
}
