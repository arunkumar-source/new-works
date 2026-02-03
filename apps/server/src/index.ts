import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel";
// import { serve } from "@hono/node-server";
import { db } from "@repo/db";
import { schema } from "@repo/db";
import { eq } from "drizzle-orm";

const app = new Hono()


app.use('*', cors({
  origin: ['*','http://localhost:5173','https://new-works-workdash.vercel.app/','https://new-works-workdash.vercel.app'], 
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}))

app.options('*', (c) => {
  return c.body(null, 204)
})




app.get("/", async (c) => {
  const works = await db.select().from(schema.workDB)
  return c.json(works)
})

app.post("/add", async (c) => {
  const { title, status } = await c.req.json()
  if (!title || !status) return c.json({ message: "Invalid data" }, 400)

  const work = {
    id: crypto.randomUUID(),
    title,
    status,
    createdAt: new Date(),
  }

 await db.insert(schema.workDB).values(work)
 return c.json(work, 201)
})

app.patch("/update/:id", async (c) => {
  const id = c.req.param("id")
  const updates = await c.req.json()

  const work = await db.update(schema.workDB).set(updates).where(eq(schema.workDB.id, id)).returning()
  if (!work || work.length === 0) return c.json({ message: "Not found" }, 404)

  return c.json(work[0])
})

app.delete("/delete/:id", async (c) => {
  const id = c.req.param("id")
  await db.delete(schema.workDB).where(eq(schema.workDB.id, id))
  return c.body(null, 204)
})

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export const OPTIONS = handle(app)

// Local development server
// const port = 3000
// console.log(`Server is running on port http://localhost:${port}`)

// serve({
//   fetch: app.fetch,
//   port
// })
