import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Rappy</title>
        <link rel="icon" href="/apple.ico" />
      </Head>
      <div className="gradient-bg">
        <div className="w-full mx-auto">
          <div className="flex items-center mx-5 px-5 pt-4 pb-2">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-gray-100 font-bold text-xl">
                  <Image
                    unoptimized
                    src="/img/amazan.svg"
                    width={150}
                    height={50}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="text-gray-100 text-lg ml-8">Profile</a>
              </Link>
              <Link href="/">
                <a className="text-gray-100 text-lg ml-5">About</a>
              </Link>
              <Link href="blog">
                <a className="text-gray-100 text-lg ml-5">Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
