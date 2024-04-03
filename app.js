
// const submit = document.querySelector('#submit')
const form = document.querySelector('form')


form.addEventListener('submit',calculate)

function calculate(e) {
    e.preventDefault()
    //here the value writtn in the form are taken
    //Note: values are only got when the event is invoked
    // when trying to get value before invocation of event the value is 0 

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#result')


    if(height == ''|| height <= 0 || isNaN(height)){
        result.innerHTML = "Please write the valid height"
    }
    else if(weight == '' || weight <= 0 || isNaN(weight)){
        result.innerHtml = "Please write the valid weight"
    }else{
        const bmi = ((weight/(height*height))*10000).toFixed(2)
        result.innerText= bmi
        function conditonCheck(){
            // console.log(bmi)
            const condition = document.querySelector('#condition')
            if(bmi < 18.2){
                condition.innerHTML = "You are Under Weight"
                condition.style.display = 'inline-block'
            }
            else if(bmi > 18.2 && bmi < 24.5){
                // console.log('hrllo')
                condition.innerHTML = "You are in Normal Range"
                condition.style.display = 'inline-block'
            }
            if(bmi > 24.5){
                condition.innerHTML = "You are Overweight"
                condition.style.display = 'inline-block'
            }
        }
        conditonCheck()
    }

}
