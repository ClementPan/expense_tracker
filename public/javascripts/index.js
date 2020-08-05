// const { DocumentProvider } = require("mongoose")

// 總金額
const amountArr = document.querySelectorAll('.amount')
const totalAmount = document.querySelector('h5 span')

let amount = 0
amountArr.forEach(item => amount += Number(item.innerHTML))
totalAmount.innerText = amount


// 記事背景色
const container = document.querySelectorAll('.container')
for (let i = 0; i < container.length; i++) {
  if (i % 2 === 1) {
    container[i].className += ' bg bg-light'
  }
}

// icons
const cateIcons = document.querySelectorAll('.cateIcons') //目標
const icons = document.querySelector('.icons') //後端打到html上的
const iconTagName = String(icons.innerText).trim().split(' ')  //要加到真正icon的classList的

for (let i = 0; i < iconTagName.length; i++) {
  cateIcons[i].classList += iconTagName[i]
  console.log(cateIcons)
}




