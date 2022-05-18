import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import PageLaout from "../components/layout";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="text-black">
        An unexpected error occurred:EPERM: operation not permitted, unlink
        C:\\Users\\DELL\\Documents\\Tekel_Project\\defi\\node_modules\\@n
        ext\\swc-win32-ia32-msvc\\next-swc.win32-ia32-msvc.node. ext\\s info
        If you think this is a bug, please open a bug report with the
        information provided in
        C:\\Users\\DELL\\Documents\\Tekel_Project\\defi\\yarn-error.log
      </div>
    </>
  );
}
