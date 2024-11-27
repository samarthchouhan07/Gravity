"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Error(){
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
              src={"/Screenshot 2024-11-27 215413.png"}
              height={"300"}
              width={"300"}
              alt="Error"
              className=""
            />
            <h2 className="text-xl font-medium">
                Something went wrong
            </h2>
            <Button asChild>
                <Link href={"/documents"}>
                   Go back
                </Link>
            </Button>
        </div>
    )
}