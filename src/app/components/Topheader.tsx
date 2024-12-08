import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topheader = () => {
  return (
    <div className="w-full border-b-2 border-gray-300 p-4 bg-taji">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Image
          src={"/image/Vector (5).svg"}
          alt="image"
          height={24}
          width={24}
        />
        <div className="flex gap-4 font-medium">
          <Link href={"#"}>Find a Store </Link> |<Link href={"#"}>Help </Link> |
          <Link href={"#"}>Join Us</Link> |<Link href={"#"}>Sing In</Link>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
