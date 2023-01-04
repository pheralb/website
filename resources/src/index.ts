import { Hono } from "hono";
import { serveStatic } from 'hono/serve-static.module'

import { resources } from "../data";

const app = new Hono();

// Static files =>
app.use('/logos/*', serveStatic({ root: './' }))

// Return all resources =>
app.get("/", (ctx) => {
  return ctx.json(resources);
});

// Return a specific resource =>
app.get("/r/:title", (ctx) => {
  const title = ctx.req.param("title");
  const resource = resources.find((resource) => resource.title === title);
  if (!resource) {
    return ctx.json({ error: "Resource not found" }, 404);
  }
  return ctx.json(resource);
});

// Return only categories =>
app.get("/categories", (ctx) => {
  const categories = resources
    .map((resource) => resource.category)
    .filter((category, index, array) => array.indexOf(category) === index);
  return ctx.json({ categories });
});

export default app;
