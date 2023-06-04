import {
  ArrowLongRightIcon,
  CalendarIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import type { CurrentMesocycleState, loader } from "./route";
import { Link } from "@remix-run/react";
import { configRoutes } from "~/utils/routes";
import { classes } from "~/utils/classes";
import clsx from "clsx";
import type { SerializeFrom } from "@remix-run/server-runtime";

type CurrentMesocycleNotFoundProps = {
  data: SerializeFrom<typeof loader> & {
    state: CurrentMesocycleState.NOT_FOUND;
  };
};

export function CurrentMesocycleNotFound({
  data,
}: CurrentMesocycleNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <CalendarIcon className="mx-auto h-12 w-12 text-zinc-400" />
      <h3 className="mt-2 text-sm font-semibold text-zinc-900">Nothing here</h3>
      <p className="mt-1 text-sm text-zinc-500">
        {data.mesocyclesCount > 0
          ? "Get started by starting one of your mesocycles."
          : "Get started by planning a new mesocycle."}
      </p>
      <div className="mt-6">
        {data.mesocyclesCount > 0 ? (
          <Link
            to={configRoutes.app.mesocycles.list}
            className={clsx(classes.buttonOrLink.primary, "inline-flex gap-2")}
          >
            Go to your mesocycles
            <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to={configRoutes.app.mesocycles.new.step1}
            className={clsx(classes.buttonOrLink.primary, "inline-flex gap-2")}
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
            New mesocycle
          </Link>
        )}
      </div>
    </div>
  );
}
