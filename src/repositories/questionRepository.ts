import { prisma } from "../config/database"

async function insertQuestionDb(askedBy: string, question: string) {
    return prisma.questions.create({
        data: {
            askedBy,
            question
        }
    });
}

async function insertAnswerDb(answeredBy: string, answer: string, questionId: number) {
    return prisma.answers.create({
        data: {
            answeredBy,
            answer,
            question: { connect: { id: questionId } }
        }
    });
}

async function QuestionGet() {
    return prisma.questions.findMany()
}
async function QuestionGetbyid(id: number) {
    return prisma.questions.findMany({
        where: {
            id: id,
        }
    })
}


const questionRepository = {
    insertQuestionDb,
    insertAnswerDb,
    QuestionGet,
    QuestionGetbyid
}

export default questionRepository
