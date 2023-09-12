/* eslint-disable react/no-unescaped-entities */
'use client'

import { Search } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import SearchContent from "../SearchContent"


const SearchModal = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Search size={18}/>
                </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[425px] sm:max-w-[600px] lg:max-w-[768px] backgroundColor rounded-xl">
        <DialogHeader>
          <DialogTitle>Ara</DialogTitle>
          <DialogDescription>
            Arama yapmak için bilgileri girin ve sonuçları görüntüleyin.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
            <Input
            placeholder="Ara..."
            className="bg-lightColor dark:bg-darkerColor"/>

            <div className="flex flex-col overflow-y-auto max-h-[420px] md:max-h-[600px] gap-4">
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>
            </div>
        </div>
        </DialogContent>
    </Dialog>
  )
}

export default SearchModal