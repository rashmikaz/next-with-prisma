"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div>
      <div className="max-w-xl space-y-3">
        <div className="max-w-xl space-y-3">
          <TextField.Root placeholder="Title" type="text" />
        </div>
        <SimpleMDE placeholder="Description" />
        <Button>submit New Issue</Button>
      </div>
    </div>
  );
};

export default NewIssuePage;
