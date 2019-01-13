export function validate(data: string, dir: string) {
  if (!data) {
    throw new Error("Property 'data' is missing ");
  } else if (typeof data !== "string") {
    throw new Error("Property 'data' Type is string ");
  }

  if (!dir) {
    throw new Error("Property 'dir' is missing ");
  } else if (typeof dir !== "string") {
    throw new Error("Property 'dir' Type is string ");
  }
}
