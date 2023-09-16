import { User2 } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Input } from "../ui/input"
import Link from "next/link"

const Auth = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
                <Button variant='outline' size='icon'>
                    <User2 size={18}/>
                </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[425px] sm:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Giriş Yap veya Kaydol</DialogTitle>
          <DialogDescription>
          Hesabınıza Giriş Yapın veya Yeni Hesap Oluşturun
          </DialogDescription> 
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full flex flex-col items-center  gap-3 py-5">
            <TabsList>
                <TabsTrigger value="login">Giriş Yap</TabsTrigger>
                <TabsTrigger value="register">Kaydol</TabsTrigger>
                <TabsTrigger value="password">Şifremi Unuttum</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="flex flex-col gap-3 w-full sm:w-[65%]">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="******"/>
                <Button>
                    Giriş Yap
                </Button>
            </TabsContent>

            <TabsContent value="register" className="flex flex-col gap-3 w-full sm:w-[65%]">
                <Input placeholder="İsim Soyisim"/>
                <Input placeholder="Kullanıcı Adı"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Şifre"/>
                <Input type="password" placeholder="Şifre Tekrarı"/>
                <Button variant='secondary'>
                    Kaydol
                </Button>
            </TabsContent>
        </Tabs>
        </DialogContent>
    </Dialog>
  )
}

export default Auth