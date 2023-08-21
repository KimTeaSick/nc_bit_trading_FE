import { NO_LOGIN, ACTIVE_AUTO, INACTIVE_AUTO } from "./variables/routers";

const ROUTES_MAKE = (idx: string | null, user_auto_active: string | null) => {
  let routers;
  user_auto_active === "1"
    ? (routers = ACTIVE_AUTO)
    : (routers = INACTIVE_AUTO);

  if (idx === null) routers = NO_LOGIN;

  return routers;
};

export { ROUTES_MAKE };
