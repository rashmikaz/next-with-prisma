"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div>
      <div className="max-w-xl space-y-3">
        <TextField.Root placeholder="Title" type="text" />
        <TextArea placeholder="Description" />
        <Button>submit New Issue</Button>
      </div>
    </div>
  );
};

export default NewIssuePage;
