'use client'

import { ArrowRight, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import Link from "next/link";

interface NavItemProps {
    name: string;
    seo: string;
    dropdown?: NavItemProps[];
  }

const ListItem: React.FC<NavItemProps> = ({name, seo, dropdown}) => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
    <li className="w-full">
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
    >
    <div className="flex flex-col w-full">
    <div className="px-2 py-3 rounded-xl hover:dark:bg-darkColor duration-300 hover:bg-lightColor  w-full flex items-center justify-between">
        <Link href={seo} className="font-semibold ">{name}</Link>
        {dropdown && 
        <CollapsibleTrigger asChild>
        <ChevronsUpDown className="cursor-pointer"/>
        </CollapsibleTrigger>
        }
    </div>

    <CollapsibleContent>
        {dropdown?.map((item, i) => (
            <div key={i} className="flex flex-col pl-3">
            <Link href={item.seo} className="px-2 py-3 rounded-xl hover:dark:bg-darkColor duration-300 hover:bg-lightColor  w-full flex items-center justify-between">
                <span className="font-semibold ">{item.name}</span>
                <ArrowRight className="cursor-pointer"/>
            </Link>
        </div>
        ))}
    </CollapsibleContent>
    </div>
    </Collapsible>
    </li>
    );
}
 
export default ListItem;