import type { ReactNode } from "react";

type ErrorPageProps = {
  statusCode: number;
  title: string;
  subtitle: string;
  action: ReactNode;
};

export function ErrorPage({
  action,
  statusCode,
  subtitle,
  title,
}: ErrorPageProps) {
  return (
    <main className="h-full break-words px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-orange-600 dark:text-orange-500">
          {statusCode}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-gray-50 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {subtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {action}
        </div>
      </div>
    </main>
  );
}
