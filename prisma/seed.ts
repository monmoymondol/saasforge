import { PrismaClient, Role, SubscriptionPlan, SubscriptionStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create demo user
  const passwordHash = await bcrypt.hash("demo1234", 12);

  const demoUser = await prisma.user.upsert({
    where: { email: "demo@saasforge.dev" },
    update: {},
    create: {
      email: "demo@saasforge.dev",
      name: "Demo User",
      passwordHash,
      emailVerified: new Date(),
      role: Role.ADMIN,
    },
  });

  console.log("✅ Created demo user:", demoUser.email);

  // Create demo team
  const demoTeam = await prisma.team.upsert({
    where: { slug: "saasforge-demo" },
    update: {},
    create: {
      name: "SaaSForge Demo",
      slug: "saasforge-demo",
      description: "Demo team for SaaSForge",
      ownerId: demoUser.id,
    },
  });

  console.log("✅ Created demo team:", demoTeam.name);

  // Add user as team owner
  await prisma.teamMember.upsert({
    where: {
      userId_teamId: {
        userId: demoUser.id,
        teamId: demoTeam.id,
      },
    },
    update: {},
    create: {
      userId: demoUser.id,
      teamId: demoTeam.id,
      role: Role.OWNER,
    },
  });

  // Create subscription for demo team
  await prisma.subscription.upsert({
    where: { teamId: demoTeam.id },
    update: {},
    create: {
      teamId: demoTeam.id,
      stripeCustomerId: "cus_demo",
      plan: SubscriptionPlan.PROFESSIONAL,
      status: SubscriptionStatus.ACTIVE,
      stripeCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  console.log("✅ Created demo subscription");

  // Create sample activity
  await prisma.activity.createMany({
    data: [
      {
        userId: demoUser.id,
        teamId: demoTeam.id,
        action: "TEAM_CREATED",
        metadata: { teamName: demoTeam.name },
      },
      {
        userId: demoUser.id,
        teamId: demoTeam.id,
        action: "SUBSCRIPTION_STARTED",
        metadata: { plan: "PROFESSIONAL" },
      },
      {
        userId: demoUser.id,
        action: "LOGIN",
        metadata: { provider: "credentials" },
      },
    ],
  });

  console.log("✅ Created sample activities");

  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
