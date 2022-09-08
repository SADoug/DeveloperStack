-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "questions_askedBy_key" ON "questions"("askedBy");

-- CreateIndex
CREATE UNIQUE INDEX "questions_question_key" ON "questions"("question");

-- CreateIndex
CREATE UNIQUE INDEX "answers_questionId_key" ON "answers"("questionId");

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
