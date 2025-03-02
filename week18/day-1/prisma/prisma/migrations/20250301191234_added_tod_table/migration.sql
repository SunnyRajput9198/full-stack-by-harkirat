-- AlterTable
ALTER TABLE "users" ALTER COLUMN "city" DROP NOT NULL;

-- CreateTable
CREATE TABLE "tod" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "tod_pkey" PRIMARY KEY ("id")
);
