const code = 302;
const index =
  "https://mackie100projects.altervista.org/download-opencore-configurator/";
const base =
  "https://mackie100projects.altervista.org/download/opencore-configurator-";
const log = "https://mackie100projects.altervista.org/occ-changelog-version-";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const { pathname, searchParams } = url;

  let path = pathname.split("/")[1];
  // console.log(pathname)
  if (path) {
    const v = path.split(".");
    if (v.length !== 4) {
      return Response.redirect(index, code);
    }
    
    path = path.replaceAll(".", "-");

    const queryLog = searchParams.has("log");
    // console.log(queryLog)
    if (queryLog) {
      return Response.redirect(log + path + "/", code);
    }

    return Response.redirect(base + path + "/", code);
  }

  return Response.redirect(index, code);
}
