import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import SettingsForm from "./components/settings-form";

type paramsType = Promise<{ storeId: string }>;

const SettingsPage = async ({ params }: { params: paramsType }) => {
  const { storeId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId: userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};
export default SettingsPage;
