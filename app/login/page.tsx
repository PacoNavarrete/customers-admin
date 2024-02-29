import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 rounded-xl border p-4 dark:border-dark-forebackground md:-mt-32">
        <Link
          className="mb-2 flex h-20 items-center justify-center border-b border-b-light-forebackground p-4 dark:border-dark-forebackground md:h-40"
          href="/"
        >
          <p className="text-xl font-semibold dark:text-dark-text">
            INVOICE <span className="text-lg font-light">| PRO</span>
          </p>
        </Link>
        <LoginForm />
      </div>
    </main>
  );
}
