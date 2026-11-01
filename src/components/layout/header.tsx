"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(resolvedTheme || "system");
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />,
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2" aria-label="SaaSForge Home">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" className="fill-current" />
                <path
                  d="M8 12h16M8 16h12M8 20h8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-xl font-bold">SaaSForge</span>
            </Link>

            <div className="hidden md:flex md:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch theme (current: ${resolvedTheme})`}
              title={`Current theme: ${resolvedTheme}`}
            >
              {themeIcons[resolvedTheme as keyof typeof themeIcons] || themeIcons.system}
            </Button>

            <div className="hidden sm:flex sm:items-center sm:gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border animate-slide-in-from-top">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-2 py-2 text-base font-medium rounded-md",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                  Sign in
                </Button>
                <Button className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
