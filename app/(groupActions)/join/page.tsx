import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default async function join() {
  // This page will contain behavior to join a group
  // The will enter their group code and be redirected to the group page

  return (
    <div className="flex min-h-screen flex-col p-24">
      <Link href="/">
        <Button variant="default" className="left-10 top-6 fixed">
          Back
        </Button>
      </Link>
      <Card className="w-[600px] h-[600px] mx-auto my-8 flex-col space-y-12">
        <CardHeader className="text-center items-center py-12">
          <CardTitle>Join Group</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
          <Separator className="py-1 w-[175px] " />
        </CardHeader>
        <CardContent className="flex justify-center text-center items-center">
          <Input className="w-25" placeholder="Enter group code" />
          <Button variant="default" className="ml-4">
            Submit
          </Button>
        </CardContent>
        <CardFooter className="text-center justify-center"></CardFooter>
      </Card>
    </div>
  );
}
