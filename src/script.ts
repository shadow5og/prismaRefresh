import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... you will write your prisma Client queries here.
  const user = await prisma.user.findUnique({
    where: {
      email: "john@test.com",
    },
  });
  console.log(user);
}

main()
  .catch((e) => console.error(e.massage))
  .finally(async () => {
    await prisma.$disconnect();
  });
