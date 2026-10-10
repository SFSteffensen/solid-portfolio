// Static file server for the production Docker image.
const root = `${import.meta.dir}/dist`;
const index = Bun.file(`${root}/index.html`);

const server = Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  async fetch(req) {
    const { pathname } = new URL(req.url);
    const file = Bun.file(root + pathname);
    if (pathname !== "/" && (await file.exists())) return new Response(file);
    return new Response(index);
  },
});

console.log(`Listening on ${server.url}`);
