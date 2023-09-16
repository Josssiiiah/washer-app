"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const handleClick = async (setRandomString: any) => {
  await delay(1000); // upload to database instead of await
  const randomString = uuidv4();
  setRandomString(randomString);
};

const GroupGenerator = () => {
  const [randomString, setRandomString] = useState("");

  return (
    <>
      <div className="items-center text-cen">
        {/* make this clickable and copy onclick  */}
        <h1 className="text-black">{randomString}</h1>
        <Button
          onClick={() => handleClick(setRandomString)}
          className="mx-auto"
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default GroupGenerator;