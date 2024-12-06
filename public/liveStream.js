const pages = [
    {
        mainTitle: "Design",
        secondaryTitle1: "VI Design",
        secondaryTitle2: "Stage 01",
        videoID: "VIDEO_1",
    },
    {
        mainTitle: "Design",
        secondaryTitle1: "UI/UX design",
        secondaryTitle2: "Stage 02",
        videoID: "VIDEO_2",
    },
    {
        mainTitle: "Design",
        secondaryTitle1: "3D modeling",
        secondaryTitle2: "Stage 03",
        videoID: "VIDEO_3",
    },
    {
        mainTitle: "Development",
        secondaryTitle1: "Hackathon",
        secondaryTitle2: "Stage 01",
        videoID: "VIDEO_4",
    },
    {
        mainTitle: "Development",
        secondaryTitle1: "Algo-problem-solving",
        secondaryTitle2: "Stage 02",
        videoID: "VIDEO_5",
    },
    {
        mainTitle: "Development",
        secondaryTitle1: "Cyber security",
        secondaryTitle2: "Stage 03",
        videoID: "VIDEO_6",
    },
    {
        mainTitle: "Multimedia",
        secondaryTitle1: "Photography",
        secondaryTitle2: "Stage 01",
        videoID: "VIDEO_7",
    },
    {
        mainTitle: "Multimedia",
        secondaryTitle1: "Cinematography",
        secondaryTitle2: "Stage 02",
        videoID: "VIDEO_8",
    },
    {
        mainTitle: "Multimedia",
        secondaryTitle1: "Video editing",
        secondaryTitle2: "Stage 03",
        videoID: "VIDEO_9",
    }
];

let currentPage = 0;

function loadPage() {
    const pageData = pages[currentPage];
    document.getElementById("main-title").innerText = pageData.mainTitle;
    document.getElementById("secondary-title-1").innerText = pageData.secondaryTitle1;
    document.getElementById("secondary-title-2").innerText = pageData.secondaryTitle2;
    const iframe = document.getElementById("video-frame");
    iframe.src = `https://www.youtube.com/embed/${pageData.videoID}`;
}

function previousPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    loadPage();
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    loadPage();
}

loadPage();

const targetDate = new Date("2024-12-07T23:59:59").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();

    const timeLeft = targetDate - now;
    if (timeLeft < 0) {
    
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);
