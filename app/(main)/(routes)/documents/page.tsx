"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {toast} from "sonner"

const DocumentsPage = () => {
  const create = useMutation(api.documents.create);
  const { user } = useUser();

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    });

    toast.promise(promise,{
      loading:"Creating a new note..",
      success:"New Note Created!",
      error:"Failed to create a new note."
    })
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/Screenshot 2024-11-24 212910.png"}
        height={"300"}
        width={"300"}
        alt="Empty"
        className="rounded-3xl"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos; Gravity
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
