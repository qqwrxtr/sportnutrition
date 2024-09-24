const EatingWell = () => {
    return ( 
        <div className="py-10 md:py-20 flex justify-center flex-col max-w-[90%] mx-auto">
            <div className="title text-center">
                <h1 className="text-2xl md:text-5xl font-bold">Eating well for exercise.</h1>
            </div>
            <div className="subtitle text-lg pt-10">
                <p className="pt-5">We should all aim to eat a healthy, varied diet based on the principles of the Eatwell Guide, and this is also the case when you are active.</p>
                <p className="pt-5">When physically active, your body will use up more energy (calories). This can help with weight control, or if you are not looking to lose weight, you may find you need more food to replace the extra energy used. It is also important to keep well hydrated.</p>
                <p className="pt-5">Eating well for physical activity and sport can have many benefits including:</p>
                <ul className="list-disc pl-5 md:pl-10">
                    <li className="m-2">Allowing you to perform well in your chosen sport or activity</li>
                    <li className="m-2">Reducing the risk of injury and illness</li>
                    <li className="m-2">Ensuring the best recovery after exercise or a training programme</li>
                </ul>
                <p className="pt-5">However, the dietary patterns that will best suit an individual will depend on the amount and intensity of activity. This can range from those who are just starting to get more active, those meeting the activity guidelines (of 150 minutes moderate activity per week), those who are active at higher levels (such as those training for an endurance event such as a marathon or doing organised team sports), or professional athletes.</p>
                <p className="pt-5">For professional athletes, getting personalised nutrition advice from a qualified sports nutritionist or dietitian is likely to be an important part of their training support.</p>
            </div>
        </div>
    );
}
 
export default EatingWell;
