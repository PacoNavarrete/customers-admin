'use client';
import {
  HomeModernIcon,
  InboxStackIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeModernIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: InboxStackIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'hover:bg-light-forebackground hover:dark:bg-dark-forebackground flex h-[48px] w-full grow items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'dark:bg-dark-forebackground bg-light-forebackground':
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-4" />
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
