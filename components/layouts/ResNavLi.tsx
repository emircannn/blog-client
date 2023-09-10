'use client'

import { ArrowRight, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

interface NavItemProps {
    label: string;
    href: string;
    dropdown?: NavItemProps[];
  }

const ListItem: React.FC<NavItemProps> = ({label, href, dropdown}) => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
    <li className="w-full">
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
    >
    <div className="flex flex-col w-full">
    <div className="px-2 py-3 rounded-xl hover:dark:bg-darkColor duration-300 hover:bg-lightColor  w-full flex items-center justify-between">
        <a href={href} className="font-semibold ">{label}</a>
        {dropdown && 
        <CollapsibleTrigger asChild>
        <ChevronsUpDown className="cursor-pointer"/>
        </CollapsibleTrigger>
        }
    </div>

    <CollapsibleContent>
        {dropdown?.map((item, i) => (
            <div key={i} className="flex flex-col pl-3">
            <a href={item.href} className="px-2 py-3 rounded-xl hover:dark:bg-darkColor duration-300 hover:bg-lightColor  w-full flex items-center justify-between">
                <span className="font-semibold ">{item.label}</span>
                <ArrowRight className="cursor-pointer"/>
            </a>
        </div>
        ))}
    </CollapsibleContent>
    </div>
    </Collapsible>
    </li>
    );
}
 
export default ListItem;