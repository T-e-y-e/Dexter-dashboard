import React from 'react'

export const Topbar = ({pageTitle}) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 mb-10 bg-white w-full rounded-lg sticky top-0 shadow-sm">
      <h5 className="font-semibold">{ pageTitle }</h5>
      <div className="flex items-center gap-3">
        <div className="pr-2">
          <img src="/images/notification.png" alt="notification" />
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/user.png" alt="user" />
          <span>Admin</span>
        </div>
        <div>
          <img src="/images/chevron-down.png" alt="chevron down" />
        </div>
      </div>
    </div>
  );
}
