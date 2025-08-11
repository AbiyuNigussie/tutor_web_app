"use client";
import { ReactNode, useEffect } from "react";
import { useUser } from "@stackframe/stack";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function ClientRedirect({ children }: { children: ReactNode }) {
  const user = useUser();
  const router = useRouter();
  const pathname = (usePathname() || "").toLowerCase();

  const isSignInPretty = /^\/sign-?in(\/|$)/.test(pathname);
  const isSignUpPretty = /^\/sign-?up(\/|$)/.test(pathname);
  const isSignOutPretty = /^\/sign-?out(\/|$)/.test(pathname);

  const isSignInHandler = /^\/handler\/sign-?in(\/|$)/.test(pathname);
  const isSignUpHandler = /^\/handler\/(sign-?up|signup)(\/|$)/.test(pathname);
  const isSignOutHandler = /^\/handler\/sign-?out(\/|$)/.test(pathname);

  const isSignIn = isSignInPretty || isSignInHandler;
  const isSignUp = isSignUpPretty || isSignUpHandler;
  const isSignOut = isSignOutPretty || isSignOutHandler;

  const isHandlerRoute = pathname.startsWith("/handler");
  const wrapAuth = isHandlerRoute || isSignIn || isSignUp || isSignOut;

  useEffect(() => {
    // If already signed in, skip sign-in/sign-up pages
    if (user && (isSignIn || isSignUp)) {
      router.replace("/dashboard");
      return;
    }
    // After sign-out completes, user becomes null -> send home
    if (!user && isSignOut) {
      router.replace("/");
    }
  }, [user, isSignIn, isSignUp, isSignOut, router]);

  if (wrapAuth) {
    return (
      <>
        <Header />
        <main className="min-h-[calc(100vh-64px)] bg-white">
          <Section className="py-16">
            <div className="max-w-xl mx-auto">
              <Card padded className="shadow-sm auth-scope flex justify-center">
                {children}
              </Card>
            </div>
          </Section>
        </main>
      </>
    );
  }

  return <>{children}</>;
}
