function invertColors() {
    let paragraph = document.getElementById("try-it");
    if (paragraph.style.background == "#fff") {
        paragraph.style.background = "#000"
    } else {
        paragraph.style.background = "#fff"
    }
}

function loadPangram() {
    let pangrams = [
        "Waltz, bad nymph, for quick jigs vex.",
        "Quick zephyrs blow, vexing daft Jim.",
        "Sphinx of black quartz, judge my vow.",
        "Two driven jocks help fax my big quiz.",
        "Five quacking zephyrs jolt my wax bed.",
        "The five boxing wizards jump quickly.",
        "Pack my box with five dozen liquor jugs.",
        "The quick brown fox jumps over the lazy dog.",
        "Jinxed wizards pluck ivy from the big quilt.",
        "Crazy Fredrick bought many very exquisite opal jewels.",
        "We promptly judged antique ivory buckles for the next prize.",
        "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.",
        "Jaded zombies acted quaintly but kept driving their oxen forward.",
        "The job requires extra pluck and zeal from every young wage earner."
    ];
    
    let paragraph = document.getElementById("try-it");
    paragraph.innerText = pangrams[Math.floor(Math.random() * pangrams.length)];
}