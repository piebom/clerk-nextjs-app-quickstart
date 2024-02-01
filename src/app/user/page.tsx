import { UserProfile } from "@clerk/nextjs";

import React from 'react'

type Props = {}

function UserProfilePage({}: Props) {
  return (
    <div className="w-full justify-center flex bg-slate-100 py-10">
            <UserProfile path="/user" routing="virtual" />;

    </div>
  )
}

export default UserProfilePage