import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
        })
      )
      .mutation(async ({ input }) => {
        const BREVO_API_KEY = process.env.BREVO_API_KEY;
        
        if (!BREVO_API_KEY) {
          throw new Error("Brevo API key not configured");
        }

        try {
          const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-key": BREVO_API_KEY,
            },
            body: JSON.stringify({
              email: input.email,
              listIds: [2], // Default list ID
              updateEnabled: true,
            }),
          });

          if (response.ok || response.status === 204) {
            return { success: true, message: "subscribed" };
          } else {
            const data = await response.json();
            if (data.code === "duplicate_parameter") {
              return { success: true, message: "already_subscribed" };
            } else {
              throw new Error(data.message || "Subscription failed");
            }
          }
        } catch (error) {
          console.error("Newsletter subscription error:", error);
          throw new Error("Failed to subscribe to newsletter");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
