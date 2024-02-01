import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser,clerkClient  } from '@clerk/nextjs';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarImage } from "./ui/avatar";

const Header = async () => {
  const user = await currentUser();
  var userDetails = undefined;
  if(user){
  userDetails = await clerkClient.users.getUser(user?.id!);
  }
  return(
    <header className="flex justify-between p-4 px-10 bg-slate-100 sticky top-0 z-10">
    <div className="flex items-center">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/Logo.png" width="25" height="25" alt="Logo" />
        <span className="ml-[12px] font-bold text-lg">Amicitia</span>
      </Link>
    </div>
    <div className="flex items-center space-x-3">
      <Link href="/">Home</Link>
      <p> | </p>
      <Link href="/contact">Matches</Link>
      <p> | </p>
      <Link href="/blog">Stats</Link>
    </div>
    <div className="flex items-center">
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      {userDetails && 
      <SignedIn>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={userDetails.imageUrl} alt="profile" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="h-[100px] w-[375px] mr-[36px] rounded-[15px] p-[1.5rem]">
              <div className="flex h-fit space-x-4">
                <Image className="rounded-full  h-[44px] w-[44px]" src={userDetails.imageUrl} width="50" height="50" alt="profile" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{userDetails.firstName} {userDetails.lastName}</p>
                  <p className="text-sm text-slate-400">{userDetails.username}</p>
                </div>
              </div>
          </PopoverContent>
        </Popover>
        {/* <UserButton
          userProfileMode="modal"
          userProfileUrl="/user"
          afterSignOutUrl="/"
          afterMultiSessionSingleSignOutUrl="/"
        /> */}
      </SignedIn>
      }
    </div>
  </header>
  )
}

export default Header;