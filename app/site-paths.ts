export const siteBasePath = "/aos";

export function assetPath(path: string) {
  return path.startsWith("/") ? `${siteBasePath}${path}` : path;
}
