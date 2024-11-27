"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toobar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
// import { Editor } from "@/components/editor";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { FC } from "react";
import { useRouter } from "next/router";

// Dynamically import the Editor component (outside the component function)
const Editor = dynamic(
  () => import("@/components/editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
  }
);

// interface DocumentIdPageProps {
//   params: {
//     documentId: Id<"documents">;
//   };
// }

// Synchronous Component
const DocumentIdPage: FC = () => {
  const router = useRouter();
  const { documentId } = router.query; // Use router.query to get documentId

  // Ensure that the documentId is available and in the correct format
  
  const document = useQuery(api.documents.getById, {
    documentId: documentId as Id<"documents">, // Ensure correct typing for documentId
  });
  
  const update = useMutation(api.documents.update);
  
  const onChange = (content: string) => {
    update({
      id: documentId as Id<"documents">,
      content,
    });
  };
  
  // if (typeof documentId !== "string") {
  //   return <div>Invalid document ID</div>;
  // }
  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-14 w-[80%]" />
            <Skeleton className="h-14 w-[40%]" />
            <Skeleton className="h-14 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40 ">
      <Cover preview url={document.coverImage} />
      <div className="md:max-w-3xl lg:md-max-4xl mx-auto">
        <Toolbar preview initialData={document} />
        <Editor editable={false} onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
