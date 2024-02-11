import useCampaign from "@/hooks/useCampaign";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Status from "../status";
import { Button } from "../ui/button";
import { useRef } from "react";
import { toast } from "sonner";

const CampaignModal = () => {
  const { isOpen, closeModal, toggleModal, campaign, campaigns } =
    useCampaign();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  let isContent = false;
  if (
    campaign.budget.includes("You") ||
    campaign.budget.includes("Advertiser")
  ) {
    isContent = true;
  }
  const handleDelete = async () => {
    const ans = confirm("Are you sure you want to delete this campaign?");
    if (ans) {
      try {
        const res = await fetch("/api/campaign", {
          method: "DELETE",
          body: JSON.stringify({
            id: campaigns[0].id,
          }),
        });
        if (res.status === 200) {
          const data = await res.json();
          closeModal();
          toast.success(data.message);
        }
        if (res.status === 500) {
          toast.error("Error deleting campaign");
          closeModal();
        }
      } catch (error) {
        console.log(error);
        closeModal();
        toast.error("Error deleting campaign");
      }
    }
  };
  const handleEdit = async () => {
    const editedCampaign = {
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      budget: budgetRef.current?.value,
      duration: durationRef.current?.value,
      status: "Active",
    };
    try {
      const res = await fetch("/api/campaign", {
        method: "PATCH",
        body: JSON.stringify({
          prevTitle: campaign.title,
          title: editedCampaign.title,
          description: editedCampaign.description,
          budget: editedCampaign.budget,
          duration: editedCampaign.duration,
          status: editedCampaign.status,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        closeModal();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Error editing campaign");
    }
  };
  const handleCancel = () => {
    closeModal();
    toast.message("Changes discarded");
  };
  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="">
            <div className="flex justify-center items-center border-2 border-primary rounded-md mt-2">
              <p className="text-primary2 text-xl font-normal">
                {" "}
                {campaign.title}
              </p>
              <div className="text-sm font-normal">
                <Status status={campaign.status} />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="my-4">
              <label
                htmlFor="title"
                className="block font-medium text-primary mb-1"
              >
                Title
              </label>
              <Input
                defaultValue={campaign.title}
                ref={titleRef}
                contentEditable
                className="text-lg text-black-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="description"
                className="block font-medium text-primary mb-1"
              >
                Description
              </label>
              <Textarea
                defaultValue={campaign.description}
                contentEditable
                ref={descriptionRef}
                onChange={(e) => console.log(e.target.value)}
                className="text-lg text-black-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="budget"
                className="block font-medium text-primary mb-1"
              >
                {isContent ? "Author" : "Budget"}
              </label>
              <Input
                defaultValue={campaign.budget}
                contentEditable
                ref={budgetRef}
                className="text-lg text-black-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="duration"
                className="block font-medium text-primary mb-1"
              >
                Duration
              </label>
              <Input
                defaultValue={campaign.duration}
                contentEditable
                ref={durationRef}
                className="text-lg text-black-2"
              />
            </div>
            <div className="my-4 flex justify-end items-center gap-x-2">
              <Button variant={"outline"} onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant={"primary"} onClick={handleEdit}>
                Edit
              </Button>
              <Button variant={"destructive"} onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignModal;
