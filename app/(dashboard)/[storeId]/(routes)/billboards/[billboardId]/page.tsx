import prismadb from "@/lib/prismadb";
import { BillboardForm } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/billboard-form";

type paramsType = Promise<{ billboardId: string }>;

const BillboardPage = async ({ params }: { params: paramsType }) => {
  const { billboardId } = await params;
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
