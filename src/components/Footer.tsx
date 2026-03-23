import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start md:justify-between bg-(--primary-color) p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <h1 className="text-md font-medium tracking-wider">Bazaro</h1>
        </Link>
        <p className="text-sm text-(--text-color)">
          Your one-stop shop for all things fashion
        </p>
        <p className="text-sm text-(--text-color)">
          © 2026 Bazaro. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-(--text-color) items-center md:items-start">
        <p className="text-sm font-medium text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Terms of service</Link>
        <Link href={"/"}>Privacy policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-(--text-color) items-center md:items-start">
        <p className="text-sm font-medium text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Terms of service</Link>
        <Link href={"/"}>Privacy policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-(--text-color) items-center md:items-start">
        <p className="text-sm font-medium text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Terms of service</Link>
        <Link href={"/"}>Privacy policy</Link>
      </div>
    </div>
  );
};
