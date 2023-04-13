import { z } from "zod"

import { createTRPCRouter, protectedProcedure } from "@kyper/server/api/trpc"

export const notesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ subject: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { subject } = input
      return await ctx.prisma.note.create({ data: { subject } })
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.note.findMany({ take: 50 })
  })
})
