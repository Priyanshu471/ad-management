"use client";

import { useEffect, useState } from "react";
import CampaignModal from "../modals/campaign-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return (
    <>
      <CampaignModal />
    </>
  );
};
