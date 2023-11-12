import Image from "next/image";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <Image src="loader.svg" alt="loading" width={100} height={100} />
    </div>
  );
};

export default Loader;
