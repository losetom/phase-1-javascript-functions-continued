// code your solution here
function saturdayFun(funTime = 'roller-skate') {
    return `This Saturday, I want to ${funTime}!`
}

function mondayWork(homeWork = 'go to the office') {
    return `This Monday, I will ${homeWork}.`
}

function wrapAdjective(adjWrap = '*') {
    function inner(text = 'special') {
        return `You are ${adjWrap}${text}${adjWrap}!`
    }
    return inner 
}

