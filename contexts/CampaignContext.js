import React,{ useState } from 'react';

export const CampaignContext = React.createContext();

export const CampaignProvider = (props) => { 
    const campaign = {
        CampaignId: 1,
        Name: "test",
        StartDate: "DateTime",
        EndDate: "DateTime",
        Questions: [
            {
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
                QuestionId: 2,
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
                QuestionId: 2,
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
        ]
    }

    return(
        <CampaignContext.Provider value={campaign}>
             {props.children}
        </CampaignContext.Provider>
    );
}

