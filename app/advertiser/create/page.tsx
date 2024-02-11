"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";
import CreateNew from "../_components/createNew";
import useOpen from "@/hooks/useOpen";
import CampaignsTable from "../_components/campaignsTable";
import useFetchCamp from "@/hooks/useFetchCamp";
import useCampaign from "@/hooks/useCampaign";
import Spinner from "@/components/spinner";

const Create = () => {
  const { open, setOpen } = useOpen();
  const { isOpen, closeModal } = useCampaign();
  const { fetchData, data, loading } = useFetchCamp();
  useEffect(() => {
    fetchData("/api/campaign");
  }, [isOpen, closeModal, fetchData]);
  if (loading)
    return (
      <div className="grid place-items-center h-full">
        <Spinner />
      </div>
    );
  return (
    <div className="grid place-items-center h-full">
      {!open ? (
        <div className="flex flex-col gap-y-4 w-full my-2 h-full">
          <div className="flex flex-col justify-center items-center gap-y-4 text-xl">
            <p>Start new campaign</p>
            <Button
              variant={"primary"}
              className="flex items-center gap-x-2 w-36 text-lg"
              onClick={() => setOpen(true)}
            >
              <PlusCircle className="w-5 h-5" />
              Create
            </Button>
          </div>
          {data.length > 0 && (
            <>
              <div className="border-b border-primary2 w-full" />
              <div className="flex flex-col justify-center w-full px-4">
                <CampaignsTable
                  campaignsData={data}
                  headings={[
                    "Name",
                    "Status",
                    "Budget",
                    "Objective",
                    "Duration",
                    "Edit",
                  ]}
                  tableTitle={"Recent Campaigns"}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <CreateNew />
      )}
    </div>
  );
};
export default Create;
