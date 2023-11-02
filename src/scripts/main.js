AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    const eventDate = new Date("Dec 12, 2023 19:00:00");
    const eventTimeStamp = eventDate.getTime();

    const hoursCount = setInterval(function() {
        const now = new Date();
        const actualTimeStamp = now.getTime();
        
        const distanceToEvent = eventTimeStamp - actualTimeStamp;

        const dayInMs = 1000 * 60 * 60 * 24;
        const hourInMs = 1000 * 60 * 60;
        const minuteInMs = 1000 * 60;

        const daysToEvent = Math.floor(distanceToEvent / dayInMs);
        const hoursToEvent = Math.floor((distanceToEvent % dayInMs) / hourInMs);
        const minutesToEvent = Math.floor((distanceToEvent % hourInMs) / minuteInMs);
        const secondsToEvent = Math.floor((distanceToEvent % minuteInMs) / 1000);

        document.getElementById("contador").innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

        if (distanceToEvent < 0) {
            clearInterval(hoursCount);
            document.getElementById("contador").innerHTML = "Evento expirado"
        }
    }, 1000);
});