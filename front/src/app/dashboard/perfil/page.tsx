import { AuthRoute } from "@/app/components/clientonly/AuthRoute";
import { PerfilUser } from "@/app/components/dashboard/perfil/PerfilUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyPoint - Perfil",
  description: "MyPoint - my dashboard",
};


export default function NamePage() {
  return (
    <div>
      <AuthRoute>

        <PerfilUser />
      </AuthRoute>
    </div>
  );
}