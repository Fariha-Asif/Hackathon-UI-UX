import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { ChevronDown, Menu } from "lucide-react"

  const MobNav = () => {
    return(
        <Sheet>
  <SheetTrigger className="ml-6 mb-5 mt-3">
    <Menu/>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
        {/* Navigation Links */}
        <nav className="flex w-2">
          <a href="#" className="flex text-white">
            Shop <span className="text-sm"><ChevronDown/></span>
          </a>
          <br/>
          <a href="#" className="text-white">
            On Sale
          </a>
          <br/>
          <a href="#" className="text-white">
            New Arrivals
          </a>
          <br/>
          <a href="#" className="text-white">
            Brands
          </a>
        </nav>
          
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    )
  }
  
  export default MobNav