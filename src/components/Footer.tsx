import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="CareHub"
              className="h-24 w-auto"
            />
          </Link>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} 株式会社ナインアース All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
