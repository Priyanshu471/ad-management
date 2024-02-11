"use client";
import useUser from "@/hooks/useUser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import useOpen from "@/hooks/useOpen";
import { Input } from "../ui/input";
import { useState } from "react";
import { useImage } from "@/hooks/useImage";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useProfile } from "@/hooks/useProfile";

const ProfileModal = () => {
  const { name, role, email, setUser } = useUser();
  const { userImgUrl, setUserImgUrl } = useImage();
  const [editName, setEditName] = useState<string>(name);
  const [editEmail, setEditEmail] = useState<string>(email);
  const { open, setOpen } = useProfile();
  const handleUserChange = async (file?: File) => {
    if (file) {
      setUserImgUrl(URL.createObjectURL(file));
    }
  };
  const handleSave = async () => {
    await setUser(editName, editEmail, role);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent>
        <DialogHeader>
          <span className="font-medium text-xl text-center">Profile</span>
          <div className="rounded-full w-24 h-24 mx-auto relative flex border-black-2 border-2">
            <Image
              loader={({ src }) => src}
              src={userImgUrl || "/user-icon.png"}
              alt="user"
              width={100}
              height={1}
              className="rounded-full object-cover "
            />
            <label
              htmlFor="profile"
              className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
            >
              <Camera size={16} />
              <input
                type="file"
                name="profile"
                id="profile"
                className="sr-only"
                onChange={(e) => handleUserChange(e.target.files?.[0])}
              />
            </label>
          </div>
        </DialogHeader>
        <DialogDescription>
          <div className="my-3 gap-x-4 flex justify-between items-center">
            <label htmlFor="name" className="text-black-2 text-lg w-16">
              Name
            </label>
            <Input
              defaultValue={name}
              onChange={(e) => setEditName(e.target.value.toLowerCase())}
              className="text-black-2 mt-1 border-black-2"
            />
          </div>
          <div className="my-3 gap-x-4 flex justify-between items-center ">
            <label htmlFor="email" className="text-black-2 text-lg w-16">
              Email
            </label>
            <Input
              defaultValue={email}
              onChange={(e) => setEditEmail(e.target.value)}
              className="text-black-2 mt-1 border-black"
            />
          </div>
          <div className="my-3 gap-x-4 flex justify-between items-center">
            <label htmlFor="email" className="text-black-2 text-lg w-16">
              Role
            </label>
            <Input value={role} className="text-black-2 mt-1 border-black" />
          </div>
          <div className="flex justify-end gap-x-2">
            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant={"primary"} onClick={handleSave}>
              Save
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
