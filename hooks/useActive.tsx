"use client";

import { useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<number>(1);
  return { active, setActive };
};
export default useActive;
