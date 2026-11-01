import { auth } from "./options";
import { prisma } from "@/lib/db/prisma";
import { cache } from "react";

export const getCurrentUser = cache(async () => {
  const session = await auth();
  if (!session?.user?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      subscription: true,
      teams: {
        include: {
          team: {
            include: {
              subscription: true,
            },
          },
        },
      },
    },
  });

  return user;
});

export const getCurrentTeam = cache(async () => {
  const session = await auth();
  if (!session?.user?.teamId) return null;

  const team = await prisma.team.findUnique({
    where: { id: session.user.teamId },
    include: {
      subscription: true,
      members: {
        include: { user: true },
      },
    },
  });

  return team;
});

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function requireTeam() {
  const team = await getCurrentTeam();
  if (!team) {
    throw new Error("No team found");
  }
  return team;
}

export function hasRole(user: { role: string }, allowedRoles: string[]) {
  return allowedRoles.includes(user.role);
}

export function canAccessTeam(user: { id: string; role: string }, team: { ownerId: string; members: { userId: string; role: string }[] }) {
  if (team.ownerId === user.id) return true;
  const membership = team.members.find((m) => m.userId === user.id);
  return membership !== undefined;
}
