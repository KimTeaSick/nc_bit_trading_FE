import {
  NO_LOGIN,
  ACTIVE_AUTO,
  INACTIVE_AUTO,
  ADMIN_ACTIVE_ROUTER,
  ADMIN_ROUTER,
} from "./variables/routers";

const adminIdx = ["4", "8", "14"];

const ROUTES_MAKE = (idx: string | null, user_auto_active: string | null) => {
  let isAdmin = false;
  console.log("idx :::: ", idx);

  if (adminIdx.includes(idx!)) isAdmin = true;
  console.log("idx :::: ", isAdmin);

  if (idx === null) return NO_LOGIN;
  if (user_auto_active === "1" && isAdmin === false) return ACTIVE_AUTO;
  if (user_auto_active !== "1" && isAdmin === false) return INACTIVE_AUTO;
  if (user_auto_active == "1" && isAdmin) return ADMIN_ACTIVE_ROUTER;
  if (user_auto_active !== "1" && isAdmin) return ADMIN_ROUTER;
};

export { ROUTES_MAKE };
