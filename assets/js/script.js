let num = document.querySelector('#number-input')
let lista = document.querySelector('select#area-numbers')
let res = document.querySelector('div#area-res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('valor inválido ou já encontrado na lista')
    }
    document.querySelector('#number-input').value = ' '
    num.focus()
    res.innerHTML = ''
}
function finalizar() {
    if (valores.length == 0) {
        alert('Nenhum valor adicionado')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        num.focus()
        res.innerHTML += `<p class= "resultad0">Ao todo, temos ${total} numeros adicionados</p>`
        res.innerHTML += `<p class="resultado">O maior valor adicionado é ${maior}.</p>`
        res.innerHTML +=`<p class="resultado">O menor valor adicionado é ${menor}.</p>`
        res.innerHTML += `<p class="resultado">Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p class="resultado">A média dos valores informados é ${parseFloat.media(3)}</p>`
    }
}