"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/services/supabaseClient";
import { isCurrentUserAdmin } from "@/src/services/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;

    async function guard() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/");
        return;
      }

      const ok = await isCurrentUserAdmin();

      if (!ok) {
        router.replace("/login");
        return;
      }

      if (alive) {
        setReady(true);
      }
    }

    guard();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/");
      }
    });

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#040607] px-4 text-white">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
          Verificando permissão...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}