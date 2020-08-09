//////////// functions ////////////
// 總金額
const getTotalAmount = function () {
  const amountArr = document.querySelectorAll('.amount')
  const totalAmount = document.querySelector('h5 span')
  let amount = 0
  amountArr.forEach(item => amount += Number(item.innerHTML))
  totalAmount.innerText = amount
}

// 記事背景色
const renderRecordColor = function () {
  const container = document.querySelectorAll('.container')
  for (let i = 0; i < container.length; i++) {
    if (i % 2 === 1) {
      container[i].className += ' bg bg-light'
    }
  }
}

// 到DB尋找record對應圖示
const getRecordIcon = function () {
  const cateIcons = document.querySelectorAll('.cateIcons') //目標
  const icons = document.querySelector('.icons') //後端打到html上的
  const iconTagName = String(icons.innerText).trim().split(' ')  //要加到真正icon的classList的

  for (let i = 0; i < iconTagName.length; i++) {
    cateIcons[i].classList += iconTagName[i]
    // console.log(cateIcons)
  }
}

// inputAlert: prevent user from submitting undefined input
// function inputAlert() {
const inputAlert = function () {
  if (event.target.classList.contains('send')) {
    const inputName = document.querySelector('.inputName input')
    const inputDate = document.querySelector('.inputDate input')
    const inputAmount = document.querySelector('.inputAmount input')

    console.log('inputName: ' + inputName.value)
    console.log('inputDate: ' + inputDate.value)
    console.log('inputAmount: ' + inputAmount.value)
    console.log(typeof (inputAmount.value))
    // prevent undefined input
    if (!Boolean(inputName.value) || !Boolean(inputDate.value) || !Boolean(inputAmount.value)) {
      event.preventDefault()
      alert('資料尚未填寫完全，請填寫完整！')
    }

    // prevent non-number amount input
    if (!Number(inputAmount.value)) {
      event.preventDefault()
      alert('只能在金額欄位中填入數字！')
    }
  }
}

//////////// executing functions ////////////
const container = document.querySelector('.container')
container.addEventListener('click', inputAlert)

getTotalAmount()
renderRecordColor()
getRecordIcon()

