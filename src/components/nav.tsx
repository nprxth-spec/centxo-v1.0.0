"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Settings,
  Megaphone,
  Building2,
  FileSpreadsheet,
} from "lucide-react";

const links = [
  { href: "/accounts", label: "Accounts", icon: Building2 },
  { href: "/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/google-sheets-export", label: "Google Sheets Export", icon: FileSpreadsheet },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Nav() {
  const pathname = usePathname();
  // Strip locale prefix for comparison
  const pathnameWithoutLocale = pathname.replace(/^\/(en|th)/, '') || '/';

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={
              pathnameWithoutLocale === link.href || pathnameWithoutLocale.startsWith(link.href + '/')
            }
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
