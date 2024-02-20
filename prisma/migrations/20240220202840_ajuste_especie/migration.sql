/*
  Warnings:

  - Changed the type of `especie` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Especie" AS ENUM ('CACHORRO', 'GATO', 'OUTRO');

-- AlterTable
ALTER TABLE "animais" DROP COLUMN "especie",
ADD COLUMN     "especie" "Especie" NOT NULL;
