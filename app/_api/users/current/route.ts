import { userOperations } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";

module.exports = apiHandler({
  GET: getCurrent,
});

async function getCurrent() {
  return await userOperations.getCurrent();
}
