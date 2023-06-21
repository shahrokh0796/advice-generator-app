import "./index.html";
import "./styles/styles.scss";

async function getAdviceApI() {
    try {
        const randomAdvice = await fetch("https://api.adviceslip.com/advice");
        if (!randomAdvice.ok) {
            throw new Error(`Responce Error: ${randomAdvice.status}`);
        }

        const randomAdviceJSON = await randomAdvice.json();
        const adviceId = document.querySelector("#advice-id");
        const advice = document.querySelector("#advice");
        for (let prop in randomAdviceJSON) {
            console.log(randomAdviceJSON[prop].id+" "+randomAdviceJSON[prop].advice);
            adviceId.textContent = randomAdviceJSON[prop].id;
            advice.textContent = `"${randomAdviceJSON[prop].advice}"`;
        }

        document.querySelector("#dice").addEventListener("click", () => {
            location.reload(true);
        });
    } catch (error) {
        console.log("This is the error: ", error);
    }
}

getAdviceApI();