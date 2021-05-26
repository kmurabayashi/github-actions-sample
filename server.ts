import { serve } from "https://deno.land/std@0.89.0/http/server.ts";
const s = serve({ port: 8989 });
console.log("http://localhost:8888/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}