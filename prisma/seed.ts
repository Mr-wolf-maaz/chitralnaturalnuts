// @ts-nocheck
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");
  const hashedPassword = await bcrypt.hash("admin123!", 10);
  await prisma.user.upsert({
    where: { email: "admin@chitralnuts.pk" },
    update: {},
    create: { name: "Admin", email: "admin@chitralnuts.pk", password: hashedPassword, role: "ADMIN" },
  });
  console.log("✅ Admin: admin@chitralnuts.pk / admin123!");
  await prisma.siteSettings.upsert({
    where: { id: "settings" },
    update: {},
    create: {
      id: "settings", siteName: "Chitral Natural Nuts",
      phone: "+92-xxx-xxxxxxx", email: "hello@chitralnuts.pk",
      freeShippingMin: 2000, currency: "PKR", currencySymbol: "Rs.",
    },
  });
  console.log("✅ Site settings created");
  console.log("🎉 Seed complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
