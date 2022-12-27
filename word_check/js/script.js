
    const requestURL = 'http://localhost:3000/words';

    async function getData () {

    const response = await fetch(requestURL)
    const array = await response.json()
        
    return await array
    }

    let data = getData();

    async function display(data) {
            
    const array = await data

    for (const [key, val] of Object.entries(array)){

        let box = document.getElementById('box');

        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('g-3');
        row.classList.add('align-items-center');

        let col = document.createElement('div');
        col.classList.add('col-1');

        const label = document.createElement('lebel');
        label.textContent = val.ua;

        let colA = document.createElement('div');
        colA.classList.add('col-auto');

        const input = document.createElement('input');
        input.id = key;
        input.setAttribute('type', 'text');
        input.classList.add('form-control');

        box.appendChild(row);
        row.appendChild(col);
        col.appendChild(label);
        row.appendChild(colA);    
        colA.appendChild(input);

        }
        }

    display(data);

    async function validate(data){

        const array = await data

        for (const [key, val] of Object.entries(array)){

        let answer = document.getElementById(key).value;
        let input = document.getElementById(key);

        if (val.en === answer) { 
                
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');

        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
        }
        }
        }
        

        