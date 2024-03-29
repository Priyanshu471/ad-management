"use client";
import Spinner from "@/components/spinner";
import { useImage } from "@/hooks/useImage";
import useUser from "@/hooks/useUser";
import {
  Camera,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const { name, role } = useUser();
  const { userImgUrl, coverImgUrl, setCoverImgUrl, setUserImgUrl } = useImage();

  const handleCoverChange = async (file?: File) => {
    if (file) {
      setCoverImgUrl(URL.createObjectURL(file));
    }
    toast.success("Cover image updated successfully");
  };
  const handleUserChange = async (file?: File) => {
    if (file) {
      setUserImgUrl(URL.createObjectURL(file));
    }
    toast.success("Profile image updated successfully");
  };
  return (
    <div className="mx-auto max-w-242.5">
      <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-80 md:h-65 ">
          <Image
            src={coverImgUrl || "/banner-image.png"}
            loader={({ src }) => src}
            alt="profile cover"
            className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover object-center"
            width={970}
            height={200}
          />

          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <input
                type="file"
                name="cover"
                id="cover"
                className="sr-only"
                onChange={(e) => handleCoverChange(e.target.files?.[0])}
              />
              <span>
                <Camera size={16} />
              </span>
              <span>Change</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-20 h-32 w-full max-w-32 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 ">
              <Image
                src={userImgUrl || "/user-icon.png"}
                width={160}
                height={160}
                alt="profile"
                className="rounded-full object-cover object-center"
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
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {name[0].toUpperCase() + name.slice(1)}
            </h3>
            <p className="font-medium">Content {role}</p>
            <div className="mx-auto mb-5 mt-4 grid max-w-[30rem] grid-cols-3 rounded-md border border-stroke py-2.5 shadow dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129K
                </span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 font-medium text-black dark:text-white">
                Follow me on
              </h4>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <Twitter />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <Instagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <Dribbble />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
