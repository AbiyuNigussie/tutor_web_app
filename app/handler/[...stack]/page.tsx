import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
import ClientRedirect from "./ClientRedirect";

export default function Handler(props: unknown) {
  return (
    <ClientRedirect>
      <StackHandler app={stackServerApp} routeProps={props} fullPage={false} />
    </ClientRedirect>
  );
}
