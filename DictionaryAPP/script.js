const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", (elm) => {
    elm.preventDefault();
    getWordInfo(form.elements[0].value);

});

const getWordInfo = async (word) => {
    try {
        const responce = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await responce.json();
    
        let definationss = data[0].meanings[0].definitions[0];
        // for not using the  whole word again and againe we store it in a variable.
    
        result.innerHTML = `
        <h2><strong>Word:</strong>${data[0].word}</h2>
        <p class ="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning:</strong>${definationss.definition === undefined ? "Not Found" : definationss.definition }</p>
        <p><strong>Example:</strong>${definationss.example === undefined ? "Not Found" : definationss.example }</p>
        <p><strong>Antonyms:</strong></p>
        `
    
        //if antonyms are not presents this if conditions handle the error part.
        if(definationss.antonyms.length === 0){
            result.innerHTML += `<span> Not Found </span>`
        }
        else{
            for(let i=0; i< definationss.antonyms.length; i++){
                result.innerHTML += `<li>${definationss.antonyms[i]}</li>`
            }
        }
    
        //adding reaad more button 
        result.innerHTML += `<div><a href= "${data[0].sourceUrls}" target = " _blank"> Read More </a></div>`
    } catch (error) {
        result.innerHTML = `<p>Sorry, Word is not found</p>`
    }


}