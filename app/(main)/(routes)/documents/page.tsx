"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const {user}=useUser()
    return ( 
        <div className="h-full flex flex-col items-center justify-center">
           <Image 
           src={"/Screenshot 2024-11-24 212910.png"} height={"300"} width={"300"} alt="Empty" className="rounded-3xl"/>
           <h2 className="text-lg font-medium">
             Welcome to {user?.firstName}&apos; Gravity
           </h2>
           <Button>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Create a note
           </Button>
        </div>
     );
}
 
export default DocumentsPage