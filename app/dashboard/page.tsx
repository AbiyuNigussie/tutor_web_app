"use client";
import React, { useEffect, useState } from "react";
// If "@stackframe/stack" exports a default hook for session, use the default import:
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
      if (!user) {
        router.push("/handler/auth");
      }
    }
  }, [user, router]);

  if (loading) return <div>Loading...</div>;
  if (!user && !loading) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard!</h1>
      <p>
        You are logged in as <b>{user?.primaryEmail || user?.id}</b>.
      </p>
    </div>
  );
}
