"use client";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useUser } from "@stackframe/stack";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const router = useRouter();
  const user = useUser();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const handleLogout = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.location.href = "/sign-out";
    } else {
      router.push("/sign-out");
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <Section className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" aria-hidden="true" />
          <span className="text-xl font-bold text-[#111111]">NEXUS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#555555]">
          <a href="#solutions" className="hover:text-[#111]">
            Solutions
          </a>
          <a href="#courses" className="hover:text-[#111]">
            Courses
          </a>
          <a href="#consultants" className="hover:text-[#111]">
            Consultants
          </a>
          <a href="#resources" className="hover:text-[#111]">
            Resources
          </a>
          <a href="#events" className="hover:text-[#111]">
            Events
          </a>
          <a href="#about" className="hover:text-[#111]">
            About Us
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                aria-label="Open profile menu"
                onClick={() => setOpen((v) => !v)}
                className="w-9 h-9 rounded-full bg-gray-100 border flex items-center justify-center text-sm font-bold text-[#111]"
              >
                {(user as any)?.primaryEmail?.[0]?.toUpperCase?.() ||
                  (user as any)?.id?.[0]?.toUpperCase?.() ||
                  "U"}
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-44 rounded-md border bg-white shadow-lg p-1">
                  <button
                    className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-[#111]"
                    onClick={() => {
                      setOpen(false);
                      router.push("/dashboard");
                    }}
                  >
                    Dashboard
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded hover:bg-red-50 text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-sm"
                onClick={() => {
                  if (typeof window !== "undefined")
                    window.location.href = "/sign-in";
                  else router.push("/sign-in");
                }}
              >
                Login
              </Button>
              <Button
                size="md"
                onClick={() => {
                  if (typeof window !== "undefined")
                    window.location.href = "/sign-up";
                  else router.push("/sign-up");
                }}
              >
                Register
              </Button>
            </>
          )}
        </div>
        <div
          className="md:hidden w-9 h-9 rounded-md border flex items-center justify-center"
          aria-label="Open menu"
        >
          <div className="w-5 h-0.5 bg-[#111]" />
        </div>
      </Section>
    </header>
  );
}
