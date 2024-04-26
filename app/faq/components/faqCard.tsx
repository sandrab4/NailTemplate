import React from "react";
import { Faq } from "../../utils/types";
import { IoIosArrowDown } from "react-icons/io";

interface FaqCardProps {
    data: Faq;
};

const FaqCard: React.FC<FaqCardProps> = ({ data }) => {
    return (
        <div id="FaqCard" key={data.id}>
            <div id="FaqCardQuestionContainer">
                <p>{data.question} <IoIosArrowDown /></p>
                <div id="FaqCardAnswerContainer">
                    <p>{data.answer}</p>
                </div>
            </div>

            <style>
                {`
                #FaqCard {
                    display: flex;
                    position: relative;
                    border: 1px solid red;
                }

                #FaqCardQuestionContainer {

                }

                #FaqCardAnswerContainer {

                }
                `}
            </style>
        </div>
    );
};

export default FaqCard;