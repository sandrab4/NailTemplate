import Header from "../../global/header";
import Footer from "../../global/footer";

export default function Page() {
    return (
        <>
        <Header />
        <div id="Apply">
            <div id="ApplyHeaderContainer">
                <h1 id="ApplyHeader">How to apply press-on nails</h1>
            </div>
            <div id="ApplyStepsContainer">
                <div>
                    <h1>1. Prep the cuticles</h1>
                    <p id="Step1Apply">Use a cuticle-pusher to press the cuticles back. To make the process smoother, start by applying a cuticle-removing cream. This softens the cuticles without saturating them (which can make them too soft and prone to damage). Feel free to gently trim the cuticles if you have any excess skin that could get in the way of adhesion.</p>
                </div>
                <div>
                    <h1>2. File and buff the nails</h1>
                    <p id="Step2Apply">File and lightly buff natural nails to create a smooth canvas. If your natural nails have some length and you're using a press-on with a narrow tip (like coffin or almond), make sure your natural nail tip isn't wider than that of the press-on.</p>
                </div>
                <div>
                    <h1>3. Clean the nails</h1>
                    <p id="Step3Apply">Always work on a clean dry nail surface. Apply an antiseptic to cleanse the nail prior to application. Use rubbing alcohol or nail polish remover to swab away any debris and oil.</p>
                </div>
                <div>
                    <h1>4. Size the press-ons</h1>
                    <p id="Step4Apply">Size each of your nails with a press on, making sure that your natural nail is fully covered.</p>
                </div>
                <div>
                    <h1>5. Adhere the press-ons</h1>
                    <p id="Step5Apply">Apply a thin layer of adhesive to the nail. Align the press-on with your natural nail, starting from the cuticle and pressing down toward the tip. Quickly remove any excess glue with a cotton swab or nail brush if needed. Then, press down on the nail and hold it in place.</p>
                </div>
            </div>

            <style>
                {`
                #Apply {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15vh;
                    margin-bottom: 15vh;
                }

                #ApplyHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    padding: 20px 0;
                    justify-content: center;
                    align-items: center;
                }

                #ApplyStepsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                }

                #Step1Apply, #Step2Apply, #Step3Apply, #Step4Apply, #Step5Apply {
                    margin: 50px 0;
                }
                `}
            </style>
        </div>
        <Footer />
        </>
    );
};