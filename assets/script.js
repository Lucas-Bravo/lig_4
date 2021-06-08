const lig_4 = {
    player_1: '1',
    player_2: '2',
    matrix: null,
    make_matrix() {
        return [...Array(6)].map( _ => [...Array(7)].map( _ => ' '))
    },
    start() {
        this.matrix = this.make_matrix()
        this.animations.start()
        this.disks.start()
    },
    // André,


// André,
//Funções que alterem a cor da seta de acordo com a do botão;
const seta = document.querySelector(div.fa-sort-down);
const button1 = document.querySelector(div.player__name--one);
const button2 = document.querySelector(div.player__name--two);

button1.addEventListener('click', func1() {
    seta.style.color = 'darkGreen';
});

button2.addEventListener('click', func2() {
    seta.style.color = 'green';
});

    animations: {
        buttons: {
            start() {
                const buton_area = document.querySelector('div.button_area')

                buton_area.addEventListener('click', evt => {
                    const evt_target = evt.target

                    // Animate down
                    if (evt_target.classList.contains('button--down')) {
                        evt_target.classList.add('animate--down')
                        setTimeout( _ => evt_target.classList.remove('animate--down'), 300)
                    }

                    // Animate left
                    else if (evt_target.classList.contains('button--left')) {
                        evt_target.classList.add('animate--left')
                        setTimeout( _ => evt_target.classList.remove('animate--left'), 300)
                    }

                    // Animate right
                    else if (evt_target.classList.contains('button--right')) {
                        evt_target.classList.add('animate--right')
                        setTimeout( _ => evt_target.classList.remove('animate--right'), 300)
                    }
                })
            }
        },
        start() {
            this.buttons.start()
        }
    },
    disks: {
        start() {
            const columns = [...document.querySelectorAll('div.game__col')]
            
            columns.forEach( (col, i) => {
                const container = document.createElement('div')
                const index = document.createElement('p')

                index.innerText = i + 1
                container.appendChild(index)
                container.classList.add('blank_container')
                for (let j = 0; j < 6; j++) {
                    const el = document.createElement('div')

                    el.classList.add('disk--blank')
                    container.appendChild(el)
                }
                col.appendChild(container)
            })
        }
    }
}


//André








//Gabriel

const inputNames = document.getElementById('inputNames');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    let jogadorUm = document.getElementById('inputUm').value;
    let jogadorDois = document.getElementById('inputDois').value;
    let playernameOne = document.getElementsByClassName('playername--one');
    let playernameTwo = document.getElementsByClassName('playername--two');
    playernameOne.innerText = jogadorUm;
    playernameTwo.innerText = jogadorDois;
    inputNames.className.add('hidden');

});










//Lucas
