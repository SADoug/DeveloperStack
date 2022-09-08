import questionRepository from "../repositories/questionRepository"
import { questions, answers } from "@prisma/client"


export type CreateQuestion = Omit<questions, "id">;
export type CreateAnswer = Omit<answers, "id">;


async function QuestionInsertService(createQuestion: CreateQuestion) {

    await questionRepository.insertQuestionDb(
        createQuestion.askedBy,
        createQuestion.question
    )
}

async function AnswerInsertService(createAnswer: CreateAnswer) {

    await questionRepository.insertAnswerDb(
        createAnswer.answeredBy,
        createAnswer.answer,
        createAnswer.questionId
    )
}

async function QuestionGetService() {

    return await questionRepository.QuestionGet()
}

async function QuestionGetByIDService(id: number) {

    return await questionRepository.QuestionGetbyid(id)
}

const QuestionService = {
    QuestionInsertService,
    AnswerInsertService,
    QuestionGetService,
    QuestionGetByIDService
}

export default QuestionService
