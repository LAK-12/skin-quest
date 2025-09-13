function findSkinType() {

  const form = document.querySelector('.quiz-form'); 

  form.addEventListener('submit', (e) => {
    e.preventDefault(); //submit in form automatically reloads
    const types  = {}; //object
    let occurence = {
      dry: 0,
      oily: 0,
      normal: 0,
      combo: 0
    };

    for(let i = 1; i <=8; i++) {
      const questionNumber = `q${i}`;
      const checked = form.querySelector(`input[name="${questionNumber}"]:checked`);

      if(!checked) {
        alert(`Please answer question ${i} before submitting.`)
        return;
      }
      
      types[questionNumber] = checked.value;
      if (checked.value !== 'none') {
        occurence[checked.value]++; // add to tally
      }
    }

    console.log("Answers object:", types);
    console.log("Tally counts:", occurence);

    let skinType = 'combo';
    let max = -1;
    for (const [type, count] of Object.entries(occurence)) //object into an array of key–value pairs
     {
      if (count > max) {
        max = count;
        skinType = type;
      }
      else if (count == max) { // if to else if?
        skinType = 'combo';
      }
    }

    console.log("Final winner:", skinType);

    window.location.href = `results.html?type=${skinType}`;
  })
}

findSkinType();



    

  




