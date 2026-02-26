import { BetterAuthOptions } from "better-auth";

/**
 * Better-Auth configuration for the Radiology Textbook Platform
 * Handles user authentication, sessions, and user management
 */
export const authConfig: BetterAuthOptions = {
  database: {
    provider: "postgresql",
    url: process.env.NEON_DATABASE_URL || "",
  },
  secret: process.env.AUTH_SECRET || "fallback-secret-for-development",
  baseURL: process.env.BACKEND_URL || "http://localhost:8000",
  trustHost: true,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendVerificationOnSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
  user: {
    // Define custom fields for medical user profiles
    additionalFields: {
      medicalLevel: {
        type: "string",
        required: false,
        defaultValue: "medical_student",
      },
      institution: {
        type: "string",
        required: false,
      },
      specialtyInterest: {
        type: "string",
        required: false,
      },
      preferences: {
        type: "json",
        required: false,
        defaultValue: {},
      },
      isActive: {
        type: "boolean",
        required: false,
        defaultValue: true,
      },
    },
  },
  session: {
    expiresIn: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  emailVerification: {
    sendOnSignUp: true,
  },
  password: {
    enabled: true,
    minLength: 8,
    requireNumbers: true,
    requireSpecialChars: false,
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
  callbacks: {
    signIn: {
      async success(ctx) {
        // Update last login time
        await ctx.context.user.update({
          data: {
            lastLoginAt: new Date(),
          },
          where: {
            id: ctx.session.user.id,
          },
        });
      },
    },
  },
};