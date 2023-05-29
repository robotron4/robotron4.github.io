let taoButton = document.querySelector("#taoButton");
let taoText = document.querySelector("#chapter");

let tao = [
    {
        chapter: 1,
        text: `The tao that can be told
        is not the eternal Tao.<br>
        The name that can be named
        is not the eternal Name.<br>
        The unnamable is the eternally real.<br>
        Naming is the origin
        of all particular things.<br>
        Free from desire, you realize the mystery.<br>
        Caught in desire, you see only the manifestations.<br>
        Yet mystery and manifestations
        arise from the same source.<br>
        This source is called darkness.<br>
        Darkness within darkness.<br>
        The gateway to all understanding.`
    },
    {
        chapter: 2,
        text: `When people see some things as beautiful,
        other things become ugly.<br>
        When people see some things as good,
        other things become bad.<br>
        Being and non-being create each other.<br>
        Difficult and easy support each other.<br>
        Long and short define each other.<br>
        High and low depend on each other.<br>
        Before and after follow each other.<br>
        Therefore the Master
        acts without doing anything
        and teaches without saying anything.<br>
        Things arise and she lets them come;<br>
        things disappear and she lets them go.<br>
        She has but doesn't possess,
        acts but doesn't expect.<br>
        When her work is done, she forgets it.<br>
        That is why it lasts forever.`
    },
    {
        chapter: 3,
        text: `If you overesteem great men,
        people become powerless.<br>
        If you overvalue possessions,
        people begin to steal.<br>
        The Master leads
        by emptying people's minds
        and filling their cores,
        by weakening their ambition
        and toughening their resolve.<br>
        He helps people lose everything
        they know, everything they desire,
        and creates confusion
        in those who think that they know.<br>
        Practice not-doing,
        and everything will fall into place.`
    },
    {
        chapter: 4,
        text: `The Tao is like a well:<br>
        used but never used up.<br>
        It is like the eternal void:<br>
        filled with infinite possibilities.<br>
        It is hidden but always present.<br>
        I don't know who gave birth to it.<br>
        It is older than God.<br>`
    }
]

taoButton.addEventListener("click", () => {
    let chapter = Math.floor(Math.random() * tao.length);
    let framework = `
        <h3> Chapter ${chapter + 1} </h3>
        <div>${tao[chapter].text}</div>`
    taoText.innerHTML = framework;
})