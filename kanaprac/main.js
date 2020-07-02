const MAX = 0x1B0FF
const MIN = 0x1B002

// function generateKana() {
//     return Math.random() * (MAX - MIN) + MIN
// }

const KANA_TABLE = {
    "\u{1B000}": "e",
    "\u{1B001}": "ye",
    "\u{1B002}": "a",
    "\u{1B003}": "a",
    "\u{1B004}": "a",
    "\u{1B005}": "a-wo",
    "\u{1B006}": "i",
    "\u{1B007}": "i",
    "\u{1B008}": "i",
    "\u{1B009}": "i",
    "\u{1B00A}": "u",
    "\u{1B00B}": "u",
    "\u{1B00C}": "u",
    "\u{1B00D}": "u",
    "\u{1B00E}": "u",
    "\u{1B00F}": "e",
    "\u{1B010}": "e",
    "\u{1B011}": "e",
    "\u{1B012}": "e",
    "\u{1B013}": "e",
    "\u{1B014}": "o",
    "\u{1B015}": "o",
    "\u{1B016}": "o",
    "\u{1B017}": "ka",
    "\u{1B018}": "ka",
    "\u{1B019}": "ka",
    "\u{1B01A}": "ka",
    "\u{1B01B}": "ka",
    "\u{1B01C}": "ka",
    "\u{1B01D}": "ka",
    "\u{1B01E}": "ka",
    "\u{1B01F}": "ka",
    "\u{1B020}": "ka",
    "\u{1B021}": "ka",
    "\u{1B022}": "ka-ke",
    "\u{1B023}": "ki",
    "\u{1B024}": "ki",
    "\u{1B025}": "ki",
    "\u{1B026}": "ki",
    "\u{1B027}": "ki",
    "\u{1B028}": "ki",
    "\u{1B029}": "ki",
    "\u{1B02A}": "ki",
    "\u{1B02B}": "ku",
    "\u{1B02C}": "ku",
    "\u{1B02D}": "ku",
    "\u{1B02E}": "ku",
    "\u{1B02F}": "ku",
    "\u{1B030}": "ku",
    "\u{1B031}": "ku",
    "\u{1B032}": "ke",
    "\u{1B033}": "ke",
    "\u{1B034}": "ke",
    "\u{1B035}": "ke",
    "\u{1B036}": "ke",
    "\u{1B037}": "ke",
    "\u{1B038}": "ko",
    "\u{1B039}": "ko",
    "\u{1B03A}": "ko",
    "\u{1B03B}": "ko-ki",
    "\u{1B03C}": "sa",
    "\u{1B03D}": "sa",
    "\u{1B03E}": "sa",
    "\u{1B03F}": "sa",
    "\u{1B040}": "sa",
    "\u{1B041}": "sa",
    "\u{1B042}": "sa",
    "\u{1B043}": "sa",
    "\u{1B044}": "si",
    "\u{1B045}": "si",
    "\u{1B046}": "si",
    "\u{1B047}": "si",
    "\u{1B048}": "si",
    "\u{1B049}": "si",
    "\u{1B04A}": "su",
    "\u{1B04B}": "su",
    "\u{1B04C}": "su",
    "\u{1B04D}": "su",
    "\u{1B04E}": "su",
    "\u{1B04F}": "su",
    "\u{1B050}": "su",
    "\u{1B051}": "su",
    "\u{1B052}": "se",
    "\u{1B053}": "se",
    "\u{1B054}": "se",
    "\u{1B055}": "se",
    "\u{1B056}": "se",
    "\u{1B057}": "so",
    "\u{1B058}": "so",
    "\u{1B059}": "so",
    "\u{1B05A}": "so",
    "\u{1B05B}": "so",
    "\u{1B05C}": "so",
    "\u{1B05D}": "so",
    "\u{1B05E}": "ta",
    "\u{1B05F}": "ta",
    "\u{1B060}": "ta",
    "\u{1B061}": "ta",
    "\u{1B062}": "ti",
    "\u{1B063}": "ti",
    "\u{1B064}": "ti",
    "\u{1B065}": "ti",
    "\u{1B066}": "ti",
    "\u{1B067}": "ti",
    "\u{1B068}": "ti",
    "\u{1B069}": "tu",
    "\u{1B06A}": "tu",
    "\u{1B06B}": "tu",
    "\u{1B06C}": "tu",
    "\u{1B06D}": "tu-to",
    "\u{1B06E}": "te",
    "\u{1B06F}": "te",
    "\u{1B070}": "te",
    "\u{1B071}": "te",
    "\u{1B072}": "te",
    "\u{1B073}": "te",
    "\u{1B074}": "te",
    "\u{1B075}": "te",
    "\u{1B076}": "te",
    "\u{1B077}": "to",
    "\u{1B078}": "to",
    "\u{1B079}": "to",
    "\u{1B07A}": "to",
    "\u{1B07B}": "to",
    "\u{1B07C}": "to",
    "\u{1B07D}": "to-ra",
    "\u{1B07E}": "na",
    "\u{1B07F}": "na",
    "\u{1B080}": "na",
    "\u{1B081}": "na",
    "\u{1B082}": "na",
    "\u{1B083}": "na",
    "\u{1B084}": "na",
    "\u{1B085}": "na",
    "\u{1B086}": "na",
    "\u{1B087}": "ni",
    "\u{1B088}": "ni",
    "\u{1B089}": "ni",
    "\u{1B08A}": "ni",
    "\u{1B08B}": "ni",
    "\u{1B08C}": "ni",
    "\u{1B08D}": "ni",
    "\u{1B08E}": "ni-te",
    "\u{1B08F}": "nu",
    "\u{1B090}": "nu",
    "\u{1B091}": "nu",
    "\u{1B092}": "ne",
    "\u{1B093}": "ne",
    "\u{1B094}": "ne",
    "\u{1B095}": "ne",
    "\u{1B096}": "ne",
    "\u{1B097}": "ne",
    "\u{1B098}": "ne-ko",
    "\u{1B099}": "no",
    "\u{1B09A}": "no",
    "\u{1B09B}": "no",
    "\u{1B09C}": "no",
    "\u{1B09D}": "no",
    "\u{1B09E}": "ha",
    "\u{1B09F}": "ha",
    "\u{1B0A0}": "ha",
    "\u{1B0A1}": "ha",
    "\u{1B0A2}": "ha",
    "\u{1B0A3}": "ha",
    "\u{1B0A4}": "ha",
    "\u{1B0A5}": "ha",
    "\u{1B0A6}": "ha",
    "\u{1B0A7}": "ha",
    "\u{1B0A8}": "ha",
    "\u{1B0A9}": "hi",
    "\u{1B0AA}": "hi",
    "\u{1B0AB}": "hi",
    "\u{1B0AC}": "hi",
    "\u{1B0AD}": "hi",
    "\u{1B0AE}": "hi",
    "\u{1B0AF}": "hi",
    "\u{1B0B0}": "hu",
    "\u{1B0B1}": "hu",
    "\u{1B0B2}": "hu",
    "\u{1B0B3}": "he",
    "\u{1B0B4}": "he",
    "\u{1B0B5}": "he",
    "\u{1B0B6}": "he",
    "\u{1B0B7}": "he",
    "\u{1B0B8}": "he",
    "\u{1B0B9}": "he",
    "\u{1B0BA}": "ho",
    "\u{1B0BB}": "ho",
    "\u{1B0BC}": "ho",
    "\u{1B0BD}": "ho",
    "\u{1B0BE}": "ho",
    "\u{1B0BF}": "ho",
    "\u{1B0C0}": "ho",
    "\u{1B0C1}": "ho",
    "\u{1B0C2}": "ma",
    "\u{1B0C3}": "ma",
    "\u{1B0C4}": "ma",
    "\u{1B0C5}": "ma",
    "\u{1B0C6}": "ma",
    "\u{1B0C7}": "ma",
    "\u{1B0C8}": "ma",
    "\u{1B0C9}": "mi",
    "\u{1B0CA}": "mi",
    "\u{1B0CB}": "mi",
    "\u{1B0CC}": "mi",
    "\u{1B0CD}": "mi",
    "\u{1B0CE}": "mi",
    "\u{1B0CF}": "mi",
    "\u{1B0D0}": "mu",
    "\u{1B0D1}": "mu",
    "\u{1B0D2}": "mu",
    "\u{1B0D3}": "mu",
    "\u{1B0D4}": "me",
    "\u{1B0D5}": "me",
    "\u{1B0D6}": "me-ma",
    "\u{1B0D7}": "mo",
    "\u{1B0D8}": "mo",
    "\u{1B0D9}": "mo",
    "\u{1B0DA}": "mo",
    "\u{1B0DB}": "mo",
    "\u{1B0DC}": "mo",
    "\u{1B0DD}": "ya",
    "\u{1B0DE}": "ya",
    "\u{1B0DF}": "ya",
    "\u{1B0E0}": "ya",
    "\u{1B0E1}": "ya",
    "\u{1B0E2}": "ya-yo",
    "\u{1B0E3}": "yu",
    "\u{1B0E4}": "yu",
    "\u{1B0E5}": "yu",
    "\u{1B0E6}": "yu",
    "\u{1B0E7}": "yo",
    "\u{1B0E8}": "yo",
    "\u{1B0E9}": "yo",
    "\u{1B0EA}": "yo",
    "\u{1B0EB}": "yo",
    "\u{1B0EC}": "yo",
    "\u{1B0ED}": "ra",
    "\u{1B0EE}": "ra",
    "\u{1B0EF}": "ra",
    "\u{1B0F0}": "ra",
    "\u{1B0F1}": "ri",
    "\u{1B0F2}": "ri",
    "\u{1B0F3}": "ri",
    "\u{1B0F4}": "ri",
    "\u{1B0F5}": "ri",
    "\u{1B0F6}": "ri",
    "\u{1B0F7}": "ri",
    "\u{1B0F8}": "ru",
    "\u{1B0F9}": "ru",
    "\u{1B0FA}": "ru",
    "\u{1B0FB}": "ru",
    "\u{1B0FC}": "ru",
    "\u{1B0FD}": "ru",
    "\u{1B0FE}": "re",
    "\u{1B0FF}": "re",
    "\u{1B100}": "re",
    "\u{1B101}": "re",
    "\u{1B102}": "ro",
    "\u{1B103}": "ro",
    "\u{1B104}": "ro",
    "\u{1B105}": "ro",
    "\u{1B106}": "ro",
    "\u{1B107}": "ro",
    "\u{1B108}": "wa",
    "\u{1B109}": "wa",
    "\u{1B10A}": "wa",
    "\u{1B10B}": "wa",
    "\u{1B10C}": "wa",
    "\u{1B10D}": "wi",
    "\u{1B10E}": "wi",
    "\u{1B10F}": "wi",
    "\u{1B110}": "wi",
    "\u{1B111}": "wi",
    "\u{1B112}": "we",
    "\u{1B113}": "we",
    "\u{1B114}": "we",
    "\u{1B115}": "we",
    "\u{1B116}": "wo",
    "\u{1B117}": "wo",
    "\u{1B118}": "wo",
    "\u{1B119}": "wo",
    "\u{1B11A}": "wo",
    "\u{1B11B}": "wo",
    "\u{1B11C}": "wo",
    "\u{1B11D}": "n-mu-mo",
    "\u{1B11E}": "n-mu-mo",
}

GOJUON = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    // "が", "ぎ", "ぐ", "げ", "ご",
    "さ", "し", "す", "せ", "そ",
    // "ざ", "じ", "ず", "ぜ", "ぞ",
    "た", "ち", "つ", "て", "と",
    // "だ", "ぢ", "づ", "で", "ど",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    // "ば", "び", "ぶ", "べ", "ぼ",
    // "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
    "ま", "み", "む", "め", "も",
    "や", "○", "ゆ", "○", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "ゐ", "○", "ゑ", "を"
]

GOJUON_TABLE = {
    "あ": "a",  "い": "i",  "う": "u",  "え": "e",  "お": "o",
    "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
    // "が": "ga", "ぎ": "", "ぐ": "", "げ": "", "ご": "",
    "さ": "sa", "し": "sa", "す": "su", "せ": "se", "そ": "so",
    // "ざ": "za", "じ": "", "ず": "", "ぜ": "", "ぞ": "",
    "た": "ta", "ち": "ti", "つ": "tu", "て": "te", "と": "to",
    // "だ": "da", "ぢ": "", "づ": "", "で": "", "ど": "",
    "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
    "は": "ha", "ひ": "hi", "ふ": "hu", "へ": "he", "ほ": "ho",
    // "ば": "ba", "び": "", "ぶ": "", "べ": "", "ぼ": "",
    // "ぱ": "pa", "ぴ": "", "ぷ": "", "ぺ": "", "ぽ": "",
    "ま": "ma", "み": "mi", "む": "u", "め": "me", "も": "mo",
    "や": "ya", "○": "",   "ゆ": "u", "○": "", "よ": "yo",
    "ら": "ra", "り": "ri", "る": "u", "れ": "re", "ろ": "ro",
    "わ": "wa", "ゐ": "wi", "○": "", "ゑ": "we", "を": "wo"
}


function displayKana() {
    const kanaContainer = document.getElementById("kana-container")
    const kana = String.fromCodePoint([Math.floor(Math.random() * (MAX - MIN) + MIN)])
    kanaContainer.innerText = kana
    //  + `(${KANA_TABLE[kana]})`
    currentHentai = kana
}

function displayAnsw() {
    KANA_TABLE[currentHentai].split("-").forEach((x) => {
        const correct_button = document.getElementById(`kana_${x}`)

        const timer = setInterval(() => {
            correct_button.classList.add("correct")
            setTimeout(() => {
                correct_button.classList.remove("correct")
            }, 200)
        }, 400)
        setTimeout(() => clearInterval(timer), 2000)
    })
    setTimeout(displayKana, 2000)
}

currentHentai = ""

const correct_sound = document.getElementById("correct-sound")
const wrong_sound = document.getElementById("wrong-sound")

const correct_promt = document.getElementById("correct")
const wrong_prompt = document.getElementById("wrong")

const gojunon = document.getElementById("gojuon")
GOJUON.forEach((kana, index) => {
    const button = document.createElement("button")
    button.id = `kana_${GOJUON_TABLE[kana]}`
    button.innerText = kana
    button.addEventListener("click", () => {
        // console.log(kana)
        if (check(currentHentai, GOJUON_TABLE[kana])) {
            correct_sound.play()
            correct_promt.classList.add("visible")
            setTimeout(() => correct_promt.classList.remove("visible"), 700)
            setTimeout(displayKana, 700)
        } else {
            wrong_sound.play()
            wrong_prompt.classList.add("visible")
            setTimeout(() => wrong_prompt.classList.remove("visible"), 700)
        }
        // console.log("lol")
    })
    gojunon.appendChild(button)
    if (index % 5 == 4) {
        gojunon.appendChild(document.createElement("br"))
    }
})

displayKana()

function check(hentai, kana) {
    return KANA_TABLE[hentai].split("-").includes(kana)
}