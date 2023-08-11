const myEmojis = ["😆", "🥰", "🤣"]
const emojiContainer = document.getElementById("emojiContainer")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const pophBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const inputEl = document.getElementById("emoji-input")

showEmoji()

function showEmoji() {
    emojiContainer.innerHTML = ""
    for(let i = 0; i < myEmojis.length; i++) {
        const spanEl = document.createElement("span")
        spanEl.textContent = myEmojis[i]
        emojiContainer.append(spanEl)
    }
}

pushBtn.addEventListener("click", function() {
    if(inputEl.value) {
        myEmojis.push(inputEl.value)
        inputEl.value = ""
        showEmoji()  
    }
})

unshiftBtn.addEventListener("click", function() {
    if(inputEl.value) {
        myEmojis.unshift(inputEl.value)
        inputEl.value = ""
        showEmoji() 
    }
})

pophBtn.addEventListener("click", function() {
    myEmojis.pop()
    showEmoji()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    showEmoji() 
})
