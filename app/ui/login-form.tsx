'use client';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
//auth
import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <form className="space-y-3" action={dispatch}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 dark:bg-dark-background">
          <h1
            className={`${lusitana.className} mb-3 text-2xl dark:text-dark-text`}
          >
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-dark-text"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-dark-forebackground dark:bg-dark-background dark:text-dark-text"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-dark-text"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className=" block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-dark-forebackground dark:bg-dark-background dark:text-dark-text"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
      <div className="dark:text-dark-text">
        <p>Email: user@nextmail.com</p>
        <p>Password: 123456</p>
      </div>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
