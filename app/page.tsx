import Link from 'next/link';

export default function Page() {
  return (
    <main className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text flex min-h-screen flex-col px-4 md:px-8 xl:px-16">
      <div className="h-20 w-full"></div>
      <div className="mx-auto flex max-w-[1020px] flex-col rounded-e-2xl">
        <div className="flex flex-col items-center justify-center">
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
            <Link
              href="/login"
              className="bg-light-forebackground dark:bg-dark-forebackground rounded-xl px-4 py-2"
            >
              New account
            </Link>
            <Link
              href="/create-a-count"
              className="bg-light-forebackground dark:bg-dark-forebackground rounded-xl px-4 py-2"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="mt-12 aspect-video w-full rounded-xl bg-slate-400"></div>
          <div className="absolute -left-24 top-0 mt-12 h-40 w-40 -rotate-[25deg] rounded-xl bg-slate-400 shadow"></div>
          <div className="absolute -right-8 top-7 mt-12 h-40 w-64 rotate-[24deg] rounded-xl bg-slate-400 shadow"></div>
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
