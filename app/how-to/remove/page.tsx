export default function Page() {
    return (
        <div id="Remove">
            <div id="RemoveHeaderContainer">
                <h1 id="RemoveHeader">How to Remove press-on nails</h1>
            </div>
            <div id="RemoveStepsContainer">
                <div>
                    <h1>1. Trim the press-ons</h1>
                    <p id="Step1Remove">Cut the press-ons down to the length of your own natural nails.</p>
                </div>
                <div>
                    <h1>2. Soften the adhesive</h1>
                    <p id="Step2Remove">1. Nail Glue Remover: Apply nail glue remover around the edges of the press-on nail where it's lifting. Use the pointed end of a wooden cuticle pusher to get between your natural nail and the fake nail. Then, slowly start rolling the cuticle pusher back and forth to loosen the nail.
                    2. Water Soak: Soak nails in warm water, soap, and olive oil for a few minutes to loosen the adhesive. Gently lift the press-ons from the sides using a cuticle stick. If the press-ons don't easily come off, re-soak. Avoid forcefully pulling them off to prevent damage to your natural nail.</p>
                </div>
                <div>
                    <h1>3. Buff the nail</h1>
                    <p id="Step3Remove">Use a nail buffer to gently remove any remaining adhesive residue.</p>
                </div>
                <div>
                    <h1>4. Apply cuticle oil</h1>
                    <p id="Step4Remove">Apply cuticle oil to rehydrate your nails.</p>
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
                    padding: 20px 0;
                    justify-content: center;
                    align-items: center;
                }

                #RemoveStepsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                }

                #Step1Remove, #Step2Remove, #Step3Remove, #Step4Remove {
                    margin: 50px 0;
                }
                `}
            </style>
        </div>
    );
};