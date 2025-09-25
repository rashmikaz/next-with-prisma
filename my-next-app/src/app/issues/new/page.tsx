"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { Interface } from "readline";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <div>
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/issues", data);
          router.push("/issues");
        })}
      >
        <div className="max-w-xl space-y-3">
          <TextField.Root
            placeholder="Title"
            {...register("title")}
            type="text"
          />
        </div>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
