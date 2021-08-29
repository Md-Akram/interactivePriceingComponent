const pageViews = document.querySelector('#pageviews')
const myRange = document.querySelector('#myRange')
const amount = document.querySelector('.amount')
const checkbox = document.querySelector('#checkbox')

myRange.addEventListener('change', () => {
  if (myRange.value == 1) {
    pageViews.textContent = '10k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${8 - 8 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${8}<span>/month</span>`
    }
  } else if (myRange.value == 2) {
    pageViews.textContent = '50k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${12 - 12 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${12}<span>/month</span>`
    }
  } else if (myRange.value == 3) {
    pageViews.textContent = '100k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${16 - 16 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${16}<span>/month</span>`
    }
  } else if (myRange.value == 4) {
    pageViews.textContent = '500k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${24 - 24 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${24}<span>/month</span>`
    }
  } else if (myRange.value == 5) {
    pageViews.textContent = '1M Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${36 - 36 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${36}<span>/month</span>`
    }
  }
})

checkbox.addEventListener('change', () => {
  if (myRange.value == 1) {
    pageViews.textContent = '10k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${8 - 8 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${8}<span>/month</span>`
    }
  } else if (myRange.value == 2) {
    pageViews.textContent = '50k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${12 - 12 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${12}<span>/month</span>`
    }
  } else if (myRange.value == 3) {
    pageViews.textContent = '100k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${16 - 16 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${16}<span>/month</span>`
    }
  } else if (myRange.value == 4) {
    pageViews.textContent = '500k Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${24 - 24 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${24}<span>/month</span>`
    }
  } else if (myRange.value == 5) {
    pageViews.textContent = '1M Pageviews'
    if (checkbox.checked) {
      amount.innerHTML = `$${36 - 36 * 0.25}<span>/month</span>`
    } else {
      amount.innerHTML = `$${36}<span>/month</span>`
    }
  }
})

console.log(pageViews)
console.log(myRange.attributes)
console.log(amount.textContent)
