-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('ADOTADO', 'DISPONIVEL', 'INDISPONIVEL', 'RESERVADO');

-- CreateTable
CREATE TABLE "noticias" (
    "id" BIGSERIAL NOT NULL,
    "UrlDaImagem" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "autor" VARCHAR(255) NOT NULL,
    "dataMateria" DATE NOT NULL,

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animais" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "UrlDaImagem" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "especie" VARCHAR(255) NOT NULL,
    "disponibilidade" "Disponibilidade" NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
