import React from "react";

const Layout = ({ children }): { children: React.ReactNode } => {
  return (
    <div className='flex min-h-screen'>
      <section className='bg-brand'>
        <div>
          <image
            src="/favicon.ico"
            alt='logo'
            width={16}
            height={16}
            className='h-auto'
          />

          <div className='space-y-5 text-white'>
            <h1 className='h1'> Manage your files in best ways.</h1>
            <p className='body-1'>
            This is a place where you can store all your documents here we go!.
            </p>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
