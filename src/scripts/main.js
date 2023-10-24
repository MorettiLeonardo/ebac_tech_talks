AOS.init()

const eventDate = new Date("Dec 12, 2023, 19:00")
const eventTimeStamp = eventDate.getTime()

const hoursCounter = setInterval(function() {
    const now = new Date()
    const currentTimeStamp = now.getTime()

    distanceToTheEvent = eventTimeStamp - currentTimeStamp
    
    const dayInMs = 1000 * 60 * 60 * 24
    const hoursInMs = 1000 * 60 * 60
    const minutesInMs = 1000 * 60

    const daysUntilTheEvent = Math.floor((distanceToTheEvent / dayInMs))
    const hoursUntilTheEvent = Math.floor((distanceToTheEvent % dayInMs) / hoursInMs)
    const minutesUntilTheEvent = Math.floor((distanceToTheEvent % hoursInMs) / minutesInMs)
    const secondsUntilTheEvent = Math.floor((distanceToTheEvent % minutesInMs) / 1000)

    document.getElementById('counter').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`

    if (distanceToTheEvent < 0) {
        clearInterval(hoursCounter)
        document.getElementById('counter').innerHTML = `**Evento expirado`
    }

}, 1000)