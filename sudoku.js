let sudokuF = [
    ['', '3', '', '', '', '7', '', '8', '1'],
    ['', '', '', '', '3', '2', '', '', ''],
    ['6', '', '', '9', '1', '', '4', '', '7'],
    ['5', '', '', '7', '', '3', '6', '', '4'],
    ['', '', '', '', '4', '', '', '', ''],          //sudoku Facil
    ['2', '', '7', '6', '', '9', '', '', '8'],
    ['7', '', '6', '', '2', '5', '', '', '3'],
    ['', '', '3', '1', '7', '', '', '', ''],
    ['1', '8', '', '3', '', '', '', '5', '']
];

let soluçãoF = [
    ['9', '3', '4', '5', '6', '7', '2', '8', '1'],
    ['8', '7', '1', '4', '3', '2', '9', '6', '5'],
    ['6', '2', '5', '9', '1', '8', '4', '3', '7'],
    ['5', '1', '9', '7', '8', '3', '6', '2', '4'],
    ['3', '6', '8', '2', '4', '1', '5', '7', '9'],  //resposta sudoku facil para comparar com 
    ['2', '4', '7', '6', '5', '9', '3', '1', '8'],  //  as respostas do usuario
    ['7', '9', '6', '8', '2', '5', '1', '4', '3'],
    ['4', '5', '3', '1', '7', '6', '8', '9', '2'],
    ['1', '8', '2', '3', '9', '4', '7', '5', '6']
];

let sudokuM = [
    ['', '', '', '', '', '4', '', '', ''],
    ['', '', '', '', '', '9', '', '', '7'],
    ['', '', '8', '', '', '', '6', '', ''],
    ['4', '', '', '', '', '', '', '', ''],
    ['2', '', '', '', '', '', '1', '', ''],
    ['', '', '', '', '1', '', '8', '3', ''],
    ['', '6', '', '', '', '', '', '', ''],
    ['', '', '', '5', '', '2', '', '', '4'],
    ['', '', '1', '', '', '', '', '8', '']
];

let soluçãoM = [
    ['1', '9', '2', '6', '7', '4', '3', '5', '8'],
    ['3', '5', '6', '1', '8', '9', '4', '2', '7'],
    ['7', '4', '8', '2', '5', '3', '6', '9', '1'],
    ['4', '1', '3', '9', '2', '8', '7', '6', '5'],
    ['2', '8', '5', '7', '3', '6', '1', '4', '9'],
    ['6', '7', '9', '4', '1', '5', '8', '3', '2'],
    ['5', '6', '4', '8', '9', '1', '2', '7', '3'],
    ['8', '3', '7', '5', '6', '2', '9', '1', '4'],
    ['9', '2', '1', '3', '4', '7', '5', '8', '6']
];

let sudokuD = [
    ['', '', '', '', '', '', '', '1', '4'],
    ['', '6', '', '', '', '8', '', '', ''],
    ['', '', '', '7', '1', '', '', '3', ''],
    ['', '4', '', '', '', '', '6', '', '9'],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '1', '3', '', '', '', '', ''],
    ['', '', '', '', '', '4', '', '', ''],
    ['', '', '2', '', '', '', '', '8', ''],
    ['', '', '3', '', '9', '6', '', '', '']
];

let soluçãoD = [
    ['8', '3', '9', '6', '5', '2', '7', '1', '4'],
    ['1', '6', '7', '4', '3', '8', '5', '9', '2'],
    ['5', '2', '4', '7', '1', '9', '8', '3', '6'],
    ['3', '4', '5', '2', '8', '1', '6', '7', '9'],
    ['2', '8', '6', '9', '4', '7', '3', '5', '1'],
    ['9', '7', '1', '3', '6', '5', '2', '4', '8'],
    ['7', '1', '8', '5', '2', '4', '9', '6', '3'],
    ['6', '9', '2', '1', '7', '3', '4', '8', '5'],
    ['4', '5', '3', '8', '9', '6', '1', '2', '7']
];

let sudoku = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],       //sudoku vazio para tela inicial, ele recebe 
    ['', '', '', '', '', '', '', '', ''],       // a dificuldade escolhida
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];

let solução = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],       //solução vazia para tela inicial, ele recebe 
    ['', '', '', '', '', '', '', '', ''],       // a solução para a dificuldade escolhida
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];


let idArea1 = ['LC00', 'LC01', 'LC02', 'LC10', 'LC11', 'LC12', 'LC20', 'LC21', 'LC22'];
let idArea2 = ['LC03', 'LC04', 'LC05', 'LC13', 'LC14', 'LC15', 'LC23', 'LC24', 'LC25'];
let idArea3 = ['LC06', 'LC07', 'LC08', 'LC16', 'LC17', 'LC18', 'LC26', 'LC27', 'LC28'];
let idArea4 = ['LC30', 'LC31', 'LC32', 'LC40', 'LC41', 'LC42', 'LC50', 'LC51', 'LC52']; //Arrays para verificar o aviso da area quadrada
let idArea5 = ['LC33', 'LC34', 'LC35', 'LC43', 'LC44', 'LC45', 'LC53', 'LC54', 'LC55'];
let idArea6 = ['LC36', 'LC37', 'LC38', 'LC46', 'LC47', 'LC48', 'LC56', 'LC57', 'LC58'];
let idArea7 = ['LC60', 'LC61', 'LC62', 'LC70', 'LC71', 'LC72', 'LC80', 'LC81', 'LC82'];
let idArea8 = ['LC63', 'LC64', 'LC65', 'LC73', 'LC74', 'LC75', 'LC83', 'LC84', 'LC85'];
let idArea9 = ['LC66', 'LC67', 'LC68', 'LC76', 'LC77', 'LC78', 'LC86', 'LC87', 'LC88'];

let IA = [idArea1, idArea2, idArea3, idArea4, idArea5, idArea6, idArea7, idArea8, idArea9];



let b1 = $('button')[0];
//Cria variavel e evento do botao 'Apresentação'
b1.onclick = function () {
    $('#tx1').toggle();
}

let b2 = $('button')[1];
//Cria variavel e evento do botao 'Integrantes'
b2.onclick = function () {
    $('#tx2').toggle();
}


function pNaArea(a1, a2, a3, a4, a5, a6, a7, a8, a9, p, l, c) {
    if (p.attr('id')[2] <= 2 && p.attr('id')[3] <= 2) {
        a1.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] <= 2 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a2.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] <= 2 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a3.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] <= 2) {
        a4.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a5.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a6.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] <= 2) {
        a7.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a8.push(sudoku[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a9.push(sudoku[l][c]);
    }
}

function tabela() {

    $('tr').remove();       //apaga a anterior

    let area1 = [];
    let area2 = [];
    let area3 = [];
    let area4 = [];
    let area5 = [];     //Verificação do valor na area quadrada
    let area6 = [];
    let area7 = [];
    let area8 = [];
    let area9 = [];

    let AREA = [area1, area2, area3, area4, area5, area6, area7, area8, area9];

    for (let l = 0; l <= 8; l++) {  //for para criação das linhas da tabela

        let tr = $('<tr>');

        for (let c = 0; c <= 8; c++) {  //for para a criação das colunas
            let td = $('<td>');

            if (sudoku[l][c] != 0) {  //para cada <td> se o valor for diferente d zero cria-se um <p>
                let p = $(`<p id="LC${l}${c}"> ${sudoku[l][c]} </p>`); //(l) e (c) = linha e coluna criada no for 
                td.append(p);    //adiciona o <p> ao <td> criado
                tr.append(td);   //adiciona o <td> a <tr> criada  
                pNaArea(area1, area2, area3, area4, area5, area6, area7, area8, area9, p, l, c);

            } else {
                let input = $(`<input type="text" maxlength="1" id="LC${l}${c}" value="${sudoku[l][c]}">`);
                //se o valor fo 0(vazio) cria-se input     
                td.append(input);          //adiciona input ao <td> 
                tr.append(td);             //adiciona <td> ao <tr>

                input.on('input',          //cria evento no input quando se recebe input
                    function (e) {         //função executada ao receber um input
                        let el = $(this);               //armazena-se a propria tag input             
                        let linha = el.attr('id')[2];   //armazena o terceiro valor do id(linha)
                        let coluna = el.attr('id')[3];  //armazena o quarto valor do id(coluna)
                        let valor = el.val();           //armazena o valor digitado
                        let elid = el.attr('id');

                        let a = false;
                        let b = false;
                        let c = false;

                        if (sudoku[linha].includes(valor) && valor != 0) {

                            let jatemL = $('<p class="aviso">Ja tem nessa linha!</p>');
                            aviso.append(jatemL);
                            aviso.show();

                            a = true;
                        } else {
                            for (let i = 0; i < 9; i++) {
                                if (sudoku[i][coluna] == valor && valor != 0) {

                                    let jatemC = $('<p class="aviso">Ja tem nessa coluna!</p>');
                                    aviso.append(jatemC);
                                    aviso.show();

                                    b = true;
                                }
                            }
                        }

                        for (let i = 0; i < 9; i++) {

                            if (IA[i].includes(elid)) {

                                if (AREA[i].includes(valor) && valor != 0) {
                                    $('.aviso').remove();
                                    let jatemA = $('<p class="aviso">Ja tem nessa Área!</p>');
                                    aviso.append(jatemA);
                                    aviso.show();
                                    AREA[i].push(valor);

                                    c = true;
                                } else {
                                    if (valor != 0) {
                                        AREA[i].push(valor);
                                    } else {
                                        AREA[i].pop();

                                    }
                                }
                            }
                        }

                        if (a == true || b == true || c == true) {
                            console.log('Use outro valor');
                        } else {
                            $('.aviso').remove();
                            aviso.hide();
                            sudoku[linha][coluna] = valor;


                        }

                        let t = 0;
                        let f = 0;

                        for (let i = 0; i < 9; i++) {

                            for (let j = 0; j < 9; j++) {
                                if (sudoku[i][j] == solução[i][j]) {
                                    t++;

                                } else {
                                    f++;
                                }
                            }
                        }


                        if (t == 81) {
                            let win = $('<p class="aviso">Você conseguiu!</p>');
                            aviso.append(win);
                            aviso.show();
                        }




                        console.log(sudoku); //mostra o array atualizado no console
                        console.log(area5);

                    }

                );

            }
        }

        $('#tabela').append(tr); //adiciona as <tr> com <tds> na tabela
    }

}


tabela(); // cria a tabela vazia antes de botao ser clicado


let bf = $('button')[2]; //pega botao facil
let bm = $('button')[3]; //pega botao medio
let bd = $('button')[4]; //pega botao dificil


bf.onclick = function () {  //evento que atribui sudoku facil ao vazio e chama a tabela com esses valores
    sudoku = sudokuF;
    solução = soluçãoF;
    tabela();
    $('input').css('background-color', 'rgb(177, 245, 186)');
    $('tr').css('background-color', 'rgb(177, 245, 186)');
    aviso.hide();
}

bm.onclick = function () {  //evento que atribui sudoku medio ao vazio e chama a tabela com esses valores
    sudoku = sudokuM;
    solução = soluçãoM;
    tabela();
    $('input').css('background-color', 'rgb(241, 234, 171)');
    $('tr').css('background-color', 'rgb(241, 234, 171)');
    aviso.hide();
}

bd.onclick = function () {  //evento que atribui sudoku dificil ao vazio e chama a tabela com esses valores
    sudoku = sudokuD;
    solução = soluçãoD;
    tabela();
    $('input').css('background-color', 'rgb(231, 111, 111)');
    $('tr').css('background-color', 'rgb(231, 111, 111)');
    aviso.hide();
}


let aviso = $('#aviso');
aviso.hide();

