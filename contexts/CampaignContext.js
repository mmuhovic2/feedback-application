import React, { useState } from 'react';

export const CampaignContext = React.createContext();

export const CampaignProvider = (props) => {
    const [campaignId, setCampaignId] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [name, setName] = useState("test");
    const [startDate, setStartDate] = useState("DateTime");
    const [endDate, setEndDate] = useState("DateTime");
    const [questions, setQuestions] = useState([{
        QuestionId: 1,
        QuestionType: "single-answer",
        QuestionText: "Primjer pitanja",
        IsDependent: false,
        Data1: null, //ovaj podatak će biti razlicit od null kada pitanje bude zavisno odnosno IsDependend atribut bude true
        Data2: null,
        Data3: null,
        QuestionAnswers: [
            {
                AnswerId: 1,
                Answer: {
                    AnswerText: "test",
                    IsApicture: false
                },
            },
        ]
    },
    {
        QuestionId: 2,
        QuestionType: "scale",
        QuestionText: "Primjer pitanja 2",
        IsDependent: false,
        Data1: null, //ovaj podatak će biti razlicit od null kada pitanje bude zavisno odnosno IsDependend atribut bude true
        Data2: null,
        Data3: null,
        QuestionAnswers: [
            {
                AnswerId: 1,
                Answer: {
                    AnswerText: "test 2",
                    IsApicture: false
                },
            },
        ]
    },
    {
        QuestionId: 3,
        QuestionType: "text",
        QuestionText: "Primjer pitanja 3",
        IsDependent: false,
        Data1: null, //ovaj podatak će biti razlicit od null kada pitanje bude zavisno odnosno IsDependend atribut bude true
        Data2: null,
        Data3: null,
        QuestionAnswers: [
            {
                AnswerId: 1,
                Answer: {
                    AnswerText: "test 3",
                    IsApicture: false
                },
            },
        ]
    },
    {
        QuestionId: 4,
        QuestionType: "multiple-choice",
        QuestionText: "Primjer pitanja 4",
        IsDependent: false,
        Data1: null, //ovaj podatak će biti razlicit od null kada pitanje bude zavisno odnosno IsDependend atribut bude true
        Data2: null,
        Data3: null,
        QuestionAnswers: [
            {
                AnswerId: 1,
                Answer: {
                    AnswerText: "test 4",
                    IsApicture: false
                },
            },
        ]
    },
    ]);

    const addAnswer = (answer) => {
        let rows = [...questions];
        // let index = rows.findIndex((obj => obj.QuestionId == questionId));
        rows[currentQuestion].QuestionAnswers[0].Answer.AnswerText = answer;
        setQuestions(rows);
    };

    const getNextQuestion = () => {
        if (currentQuestion < questions.length - 1)
            setCurrentQuestion(currentQuestion + 1);
    };

    const getPreviousQuestion = () => {
        if (currentQuestion > 0)
            setCurrentQuestion(currentQuestion - 1);
    };

    const values = {
        campaignId,
        name,
        startDate,
        endDate,
        questions,
        currentQuestion,
        addAnswer,
        getNextQuestion,
        getPreviousQuestion,
    }


    return (
        <CampaignContext.Provider value={values}>
            {props.children}
        </CampaignContext.Provider>
    );
}

