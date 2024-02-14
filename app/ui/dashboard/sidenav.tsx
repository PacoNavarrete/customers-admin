import NavLinks from '@/app/ui/dashboard/nav-links';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="overflow-hiddew-full flex h-full w-full flex-col py-4 md:px-4">
      <div className="border-light-forebackground dark:border-dark-forebackground h-full  overflow-y-auto rounded-3xl border shadow">
        <Link
          className="border-b-light-forebackground dark:border-dark-forebackground mb-2 flex h-20 items-center justify-center border-b p-4 md:h-40"
          href="/"
        >
          <p className="text-xl font-semibold">
            INVOICE <span className="text-lg font-light">| PRO</span>
          </p>
        </Link>
        <div className="flex h-[calc(100%-170px)] justify-between md:flex-col">
          <div className="flex gap-1 px-4 py-2 md:flex-col">
            <NavLinks />
          </div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-4 text-sm font-medium hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <ArrowRightOnRectangleIcon className="w-4 rotate-180" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
