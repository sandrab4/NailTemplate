import Header from "../../global/header";
import Footer from "../../global/footer";

export default function Page() {
    return (
        <>
        <Header />
        <div id="Remove">
            <div id="RemoveHeaderContainer">
                <h1 id="RemoveHeader">How to Remove press-on nails</h1>
            </div>
            <div id="RemoveStepsContainer">
                <div id="RemoveStep1Container">
                    <h1 id="Step1RemoveHeader">1. Trim the press-ons</h1>
                    <p id="Step1RemoveText">Cut the press-ons down to the length of your own natural nails.</p>
                </div>
                <div id="RemoveStep2Container">
                    <h1 id="Step2RemoveHeader">2. Soften the adhesive</h1>
                    <p id="Step2RemoveText">1. Nail Glue Remover: Apply nail glue remover around the edges of the press-on nail where it's lifting. Use the pointed end of a wooden cuticle pusher to get between your natural nail and the fake nail. Then, slowly start rolling the cuticle pusher back and forth to loosen the nail.
                    <br></br><br></br>2. Water Soak: Soak nails in warm water, soap, and olive oil for a few minutes to loosen the adhesive. Gently lift the press-ons from the sides using a cuticle stick. If the press-ons don't easily come off, re-soak. Avoid forcefully pulling them off to prevent damage to your natural nail.</p>
                </div>
                <div id="RemoveStep3Container">
                    <h1 id="Step3RemoveHeader">3. Buff the nail</h1>
                    <p id="Step3RemoveText">Use a nail buffer to gently remove any remaining adhesive residue.</p>
                </div>
                <div id="RemoveStep4Container">
                    <h1 id="Step4RemoveHeader">4. Apply cuticle oil</h1>
                    <p id="Step4RemoveText">Apply cuticle oil to rehydrate your nails.</p>
                </div>
            </div>

            <style>
                {`
                #Remove {
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

                #RemoveHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 0;
                    margin-bottom: 10vh;
                }

                #RemoveStepsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                }

                #RemoveStep1Container, #RemoveStep2Container, #RemoveStep3Container, #RemoveStep4Container {
                    margin-bottom: 100px;
                }

                #Step1RemoveHeader, #Step2RemoveHeader, #Step3RemoveHeader, #Step4RemoveHeader {
                    font-size: 25px;
                }

                #Step1RemoveText, #Step2RemoveText, #Step3RemoveText, #Step4RemoveText {
                    margin: 20px 0;
                    font-size: 18px;
                }
                `}
            </style>
        </div>
        <Footer />
        </>
    );
};