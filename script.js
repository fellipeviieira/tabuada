tabel.style.display = 'none'

function gerar() {
  tabel.style.display = 'block'
  let num = document.getElementById('numtxt1')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
      window.alert('[ERRO]')
  } else {
      let n = Math.abs(num.value)
      let c = 1
      tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
      }
    }
}