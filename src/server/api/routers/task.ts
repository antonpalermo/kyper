import { z } from "zod"

import { createTRPCRouter, protectedProcedure } from "@kyper/server/api/trpc"

export const taskRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ subject: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.task.create({ data: { subject: input.subject } })
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.task.findMany({ take: 50 })
  })
})
