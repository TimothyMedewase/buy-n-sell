import prismadb from "@/lib/prismadb";
import { BillboardForm } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/billboard-form";

type BillboardsParams = {
  storeId: string;
  billboardId: string;
};

type Props = {
  params: BillboardsParams;
  billboardId: string;
};

const BillboardPage = async ({ params }: Props) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
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
