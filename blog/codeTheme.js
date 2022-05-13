const python = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
const javascript = ["await", "break","case", "catch", "class", "const", "continue", "debugger",, "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "super", "switch", "static", "this", "throw", "try", "True", "typeof", "var", "void", "while", "with", "yield"]

const postArea = document.querySelector(".post-area")
postArea.hasCode = () => {
    hasCode = false
    postArea.childNodes.forEach(e => {
        if (!e.classList) { return }
        if (e.classList.contains("code")) { hasCode = true }
    })
    return hasCode
}

if (postArea.hasCode()) {
    postArea.childNodes.forEach(p => {
        if (!p.innerText) { return }
        words = p.innerText.split("\n")
        words.forEach(t => {
            t = t.split(" ")
            t.forEach(a => {
                if (python.includes(a)) {
                    const span = document.createElement("span")
                    span.classList.add("color-blue")
                    span.innerText = a
                    p.appendChild(span)
                }
            })
        })
    })
}
