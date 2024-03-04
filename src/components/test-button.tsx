"use client"

import {Button} from "@/components/ui/button";


export default function TestButton() {
  return (
    <Button
      variant="outline"
      onClick={() =>console.log("TesT")}
    >
      Show TesT
    </Button>
  )
}