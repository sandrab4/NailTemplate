import FaqCard from "./components/faqCard";
import { Faq } from "../utils/types";
import { FaqData } from "../data/faqData";
import Header from "../global/header";
import Footer from "../global/footer";

export default function Page() {
    return (
        <>
        <Header />
            <div id="FAQ">
                <div id="FAQHeaderContainer">
                    <h1>FAQ</h1>
                </div>
                <div id="FAQCardsContainer">
                    {FaqData.map((data: Faq) => (
                        <FaqCard data={data} />
                    ))}
                </div>

                <style>
                    {`
                    #FAQ {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;  
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-top: 15vh;
                        margin-bottom: 15vh;
                        padding-left: 100px;
                        padding-right: 100px;
                    }

                    #FAQHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        padding: 20px 0;
                        justify-content: center;
                        align-items: center;
                    }

                    #FAQCardsContainer {
                        border: 1px solid red;
                    }
                    `}
                </style>
            </div>
            <Footer />
        </>
    );
};