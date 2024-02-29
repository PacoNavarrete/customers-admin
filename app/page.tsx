import heroImageApp from '@/public/hero-desktop.png';
import leftImageApp from '@/public/left-hero-desktop.png';
import rightImageApp from '@/public/right-hero-desktop.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-light-background px-4 text-light-text dark:bg-dark-background dark:text-dark-text md:px-8 xl:px-16">
      <div className="h-12 w-full"></div>
      <div className="mx-auto mb-8 flex max-w-[1020px] flex-col rounded-e-2xl">
        <div className=" z-10 flex flex-col items-center justify-center">
          <h1 className="text-center text-[32px] md:text-[48px] lg:text-[72px]">
            The ultimate NextJS invoice web app.
            <span className="font-bold">
              Track your customers and invoices all in one site.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-center text-base md:mt-2 md:text-lg">
            Create new customers, add invoices, adimin and track according to
            your own workflow, access in any device. Your data is secure by a
            good provider like vercel.
          </p>
          <div className="mt-8 flex gap-4">
            {/* <Link
              href="/create-account"
              className="rounded-xl bg-light-forebackground px-4 py-2 dark:bg-dark-forebackground"
            >
              New account
            </Link> */}
            <Link
              href="/login"
              className="group flex gap-2 rounded-xl bg-light-forebackground px-4 py-2 dark:bg-dark-forebackground"
            >
              Login
              <ArrowRightIcon className="w-4 duration-300 group-hover:-rotate-12" />
            </Link>
          </div>
        </div>
        <div className="relative z-10 px-12">
          {/* <UserGroupIcon className="absolute w-60 -translate-x-24 text-slate-400" /> */}
          <div className="mt-12 aspect-video w-full rounded-xl p-2 dark:bg-dark-forebackground">
            <Image src={heroImageApp} alt="desktop app view" />
          </div>
          <div className="absolute -left-24 top-1/2 mt-12 hidden aspect-video max-w-[330px] -rotate-[05deg] rounded-xl lg:block">
            <Image src={leftImageApp} alt="invoices app view" />
          </div>
          <div className="absolute -right-8 -top-10 mt-12 hidden h-40 w-64 rotate-[0deg] rounded-xl bg-slate-400 shadow lg:block">
            <Image src={rightImageApp} alt="create invoice app" />
          </div>
        </div>
      </div>
    </main>
  );
}
