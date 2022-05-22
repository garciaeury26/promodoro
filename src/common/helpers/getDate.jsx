

export const getAndSetDate = (date) => {

    function myTimer() {
        const d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }

    return myTimer();

}
