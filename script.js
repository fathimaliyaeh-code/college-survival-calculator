/* =========================
   FORTUNES
========================= */

const fortunes = [

    "A favourable day awaits you. Unfortunately, you will forget to bring your record.",

    "Your social future looks bright. Your group chat status does not.",

    "You will remember something extremely important today. Approximately three minutes after leaving home.",

    "The stars predict academic success. The stars have not seen your attendance.",

    "Someone will compliment you today. You will spend the next six hours wondering what they meant.",

    "A great opportunity is approaching. You will probably notice it five minutes too late.",

    "You will enter a room and immediately forget why you went there. The universe finds this hilarious.",

    "Today is an excellent day to be productive. Naturally, you will choose tomorrow.",

    "Your future contains good grades, good friends, and at least one completely unnecessary group chat argument.",

    "Someone will ask, 'Did you finish the assignment?' Choose your next words carefully.",

    "You are about to save money. Then you will see something you absolutely do not need.",

    "A peaceful day is coming. It will end the moment someone says, 'Guys, there is a small change in the plan.'",

    "Your intuition is strong today. Ignore it and check your bag three times anyway.",

    "You will have an unexpectedly good conversation with someone. You will then replay it in your head tonight.",

    "A mysterious message will arrive. It will probably just be a college group announcement.",

    "You will confidently walk into class and realise you are in the wrong room.",

    "The universe says you deserve a break. Your deadline disagrees.",

    "Something you have been worrying about will work out. Something you forgot about will become the new problem.",

    "You will find exactly what you were looking for after you stop looking for it.",

    "Your luck is improving. Your ability to remember deadlines is not.",

    "A delicious snack is in your future. So is the regret of spending money on it.",

    "You will say 'I'll just check my phone for a minute.' The universe advises against this.",

    "Today you will make an excellent decision. It may be immediately followed by a questionable one.",

    "Someone nearby knows something you don't. Unfortunately, they are also refusing to explain.",

    "Your future is full of possibilities. Some of them involve submitting things at 11:59 PM.",

    "You will feel extremely organised today. This feeling may last up to seventeen minutes.",

    "The stars predict that you will lose something. It will be in your hand.",

    "A lucky moment is approaching. Please try not to be in the bathroom when it happens.",

    "Your next academic victory will arrive wearing the disguise of an assignment you almost ignored.",

    "You are destined for greatness. First, please charge your phone."

];


/* =========================
   MORAL SUPPORT
========================= */

const supportMessages = [

    "You are doing better than your browser history suggests.",

    "One assignment at a time. Or at least open one assignment at a time.",

    "You don't need to have everything figured out today. That's tomorrow's problem.",

    "Take a breath. Pretend you know what you're doing. Confidence is surprisingly convincing.",

    "You survived yesterday. Statistically, you have experience now.",

    "Your deadline is not a personal attack. Probably.",

    "You can do this. And if you can't do it perfectly, submit it anyway.",

    "Nobody knows what they're doing all the time. Some people just have better-looking notebooks.",

    "Drink some water. Then return to pretending you are organised.",

    "Your current level of panic is not a productivity strategy.",

    "You are allowed to take a break. Just remember to come back.",

    "The assignment may be ugly. The important thing is that it exists.",

    "You don't need motivation. You need to open the document.",

    "Future You is begging Present You to stop making everything their problem.",

    "You are academically questionable but emotionally supported."

];


/* =========================
   PROCRASTINATION
========================= */

const excuses = [

    "I cannot start yet. The desk does not have the correct academic energy.",

    "I need to organise my playlist first. Productivity requires the right soundtrack.",

    "I should probably watch one productivity video before becoming productive.",

    "I was going to study, but my brain has requested a software update.",

    "This assignment deserves my full attention. Unfortunately, my full attention is currently unavailable.",

    "I need a snack. Nobody has ever achieved greatness while slightly hungry.",

    "I will start after I check one notification. This is a completely reasonable decision.",

    "My pen is not emotionally prepared for this assignment.",

    "I should clean my room first. A clean environment creates a productive mindset. Probably.",

    "I need to stare at the syllabus for a while so it knows I am serious.",

    "Today feels like a preparation day. Tomorrow feels more like an execution day.",

    "I have decided to procrastinate strategically.",

    "I cannot work under these conditions. The conditions are: it is Monday.",

    "I opened the assignment. That counts as progress. Please don't ask questions.",

    "I am currently gathering the courage to begin. This may take several business days.",

    "My brain has temporarily outsourced productivity to Future Me.",

    "I need to mentally prepare myself for the possibility of doing the assignment.",

    "I was about to start, but then I remembered that starting creates expectations.",

    "I need five minutes to do absolutely nothing before I can begin doing something.",

    "The assignment has been acknowledged. Further action is currently under review."

];


const worseExcuses = [

    "I cannot study until I have achieved the correct level of academic readiness. Current readiness: 3%.",

    "I was going to work, but I accidentally entered a period of intense reflection about why assignments exist.",

    "The deadline is approaching too quickly. I believe standing still will make it slower.",

    "I have opened the document. The document and I are now in a professional relationship.",

    "I cannot begin until I know exactly how I am going to feel while doing it.",

    "I need to reorganise my entire life before I can organise this one assignment.",

    "My productivity window opened earlier today. Unfortunately, I was not available during business hours.",

    "I have decided that panic is more effective when delayed until the last possible moment.",

    "The task is not difficult. Starting it, however, has been classified as an advanced procedure.",

    "I am not procrastinating. I am allowing the deadline to develop character."

];


/* =========================
   PAGE FUNCTIONS
========================= */

function hideAllPages() {

    document.getElementById("home").style.display = "none";

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "none";

    document.getElementById("fortune-page").style.display = "none";

    document.getElementById("support-page").style.display = "none";

    document.getElementById("procrastination-page").style.display = "none";

}


/* =========================
   HOME
========================= */

function showHome() {

    hideAllPages();

    const home =
        document.getElementById("home");

    home.style.display = "flex";

    /* Restart homepage animations */

    home.classList.remove("home-animate");

    void home.offsetWidth;

    home.classList.add("home-animate");

    window.scrollTo(0, 0);

}


/* =========================
   QUIZ
========================= */

function showQuiz() {

    hideAllPages();

    const quiz =
        document.getElementById("quiz");

    quiz.style.display = "block";


    /* Reset fake diagnostic scan */

    const scan =
        document.getElementById("survival-scan");

    const progress =
        document.getElementById("scan-progress");

    const percentage =
        document.getElementById("scan-percentage");

    const message =
        document.getElementById("scan-message");


    if (scan) {

        scan.classList.add("hidden");

    }


    if (progress) {

        progress.style.width = "0%";

    }


    if (percentage) {

        percentage.textContent = "0%";

    }


    if (message) {

        message.textContent =
            "Preparing unnecessarily advanced analysis...";

    }


    window.scrollTo(0, 0);

}


/* =========================
   FORTUNE
========================= */

function showFortune() {

    hideAllPages();

    document.getElementById("fortune-page").style.display = "block";

    resetFortune();

    window.scrollTo(0, 0);

}


function resetFortune() {

    const cookie =
        document.getElementById("fortune-cookie");

    const result =
        document.getElementById("fortune-result");

    const loading =
        document.getElementById("fortune-loading");


    cookie.textContent = "🥠";

    cookie.classList.remove("cracking");

    cookie.disabled = false;


    document.getElementById("fortune-instruction").textContent =
        "Click the cookie. It has been waiting for you.";


    document.getElementById("fortune-text").textContent = "";


    result.classList.add("hidden");

    loading.classList.add("hidden");

}


function crackCookie() {

    const cookie =
        document.getElementById("fortune-cookie");

    const instruction =
        document.getElementById("fortune-instruction");

    const loading =
        document.getElementById("fortune-loading");

    const result =
        document.getElementById("fortune-result");


    /* Prevent repeated clicks */

    cookie.disabled = true;


    /* Hide previous result */

    result.classList.add("hidden");


    /* Start cracking animation */

    cookie.classList.remove("cracking");

    void cookie.offsetWidth;

    cookie.classList.add("cracking");


    instruction.textContent =
        "Interpreting your extremely important destiny...";


    loading.classList.remove("hidden");


    /* Choose random fortune */

    const randomIndex =
        Math.floor(
            Math.random() * fortunes.length
        );


    const selectedFortune =
        fortunes[randomIndex];


    /* Fake cosmic processing */

    setTimeout(function () {

        cookie.textContent = "💥";

        loading.classList.add("hidden");


        instruction.textContent =
            "The universe has spoken. Proceed at your own risk.";


        document.getElementById("fortune-text").textContent =
            selectedFortune;


        /* Random category */

        const categories = [

            "SOCIAL DESTINY",

            "ACADEMIC PROPHECY",

            "FINANCIAL OMEN",

            "SOCIAL FORECAST",

            "GENERAL MISFORTUNE",

            "MYSTERIOUS WARNING",

            "HIGHLY SPECIFIC DESTINY"

        ];


        const category =
            categories[
                Math.floor(
                    Math.random() * categories.length
                )
            ];


        document.getElementById("fortune-category").textContent =
            category;


        /* Random confidence */

        const confidence =
            Math.floor(Math.random() * 16) + 84;


        document.getElementById("fortune-confidence").textContent =
            "COSMIC CONFIDENCE: " + confidence + "%";


        result.classList.remove("hidden");

        cookie.disabled = false;

    }, 900);

}


/* =========================
   MORAL SUPPORT
========================= */

function showMoralSupport() {

    hideAllPages();

    document.getElementById("support-page").style.display = "block";

    window.scrollTo(0, 0);

}


function giveSupport() {

    const emoji =
        document.getElementById("support-emoji");

    const prompt =
        document.getElementById("support-prompt");

    const level =
        document.getElementById("support-level");

    const meter =
        document.getElementById("support-meter-fill");

    const loading =
        document.getElementById("support-loading");

    const loadingText =
        document.getElementById("support-loading-text");

    const messageBox =
        document.getElementById("support-message");

    const supportText =
        document.getElementById("support-text");


    /* Hide previous result */

    messageBox.classList.add("hidden");

    loading.classList.remove("hidden");


    /* Reset meter */

    meter.style.width = "0%";

    level.textContent = "ANALYSING";


    /* Completely unnecessary diagnostic messages */

    const loadingMessages = [

        "Detecting academic distress...",

        "Checking emotional battery levels...",

        "Scanning for unnecessary overthinking...",

        "Calculating deadline-related panic...",

        "Consulting the imaginary support department..."

    ];


    let index = 0;


    loadingText.textContent =
        loadingMessages[index];


    const messageInterval =
        setInterval(function () {

            index++;


            if (index < loadingMessages.length) {

                loadingText.textContent =
                    loadingMessages[index];

            }

        }, 350);


    /* Random support level */

    const supportLevel =
        Math.floor(Math.random() * 71) + 25;


    setTimeout(function () {

        clearInterval(messageInterval);

        loading.classList.add("hidden");


        meter.style.width =
            supportLevel + "%";


        /* Determine fake status */

        if (supportLevel >= 80) {

            level.textContent =
                "HIGHLY CONCERNING";

            emoji.textContent =
                "🫡";

            prompt.textContent =
                "The system has detected significant academic nonsense.";

        }

        else if (supportLevel >= 55) {

            level.textContent =
                "MODERATELY CONCERNING";

            emoji.textContent =
                "😐";

            prompt.textContent =
                "You appear to be experiencing a manageable amount of chaos.";

        }

        else {

            level.textContent =
                "MILDLY QUESTIONABLE";

            emoji.textContent =
                "🙂";

            prompt.textContent =
                "Everything appears mostly fine. Suspicious.";

        }


        /* Pick random support message */

        const randomIndex =
            Math.floor(
                Math.random() * supportMessages.length
            );


        supportText.textContent =
            supportMessages[randomIndex];


        messageBox.classList.remove("hidden");

    }, 1900);

}


/* =========================
   PROCRASTINATION
========================= */

function showProcrastination() {

    hideAllPages();

    document.getElementById("procrastination-page").style.display = "block";

    resetProcrastination();

    window.scrollTo(0, 0);

}


function resetProcrastination() {

    const loading =
        document.getElementById("procrastination-loading");

    const result =
        document.getElementById("excuse-result");

    const meter =
        document.getElementById("procrastination-meter-fill");

    const level =
        document.getElementById("procrastination-level");

    const prompt =
        document.getElementById("procrastination-prompt");

    const couch =
        document.getElementById("couch-icon");

    const worseButton =
        document.getElementById("worse-button");

    const excuseButton =
        document.getElementById("excuse-button");


    loading.classList.add("hidden");

    result.classList.add("hidden");

    meter.style.width = "0%";

    level.textContent = "UNKNOWN";

    prompt.textContent =
        "Press the button to determine why you absolutely cannot work right now.";

    couch.textContent = "🛋️";

    worseButton.classList.add("hidden");

    excuseButton.disabled = false;


    document.getElementById("excuse-text").textContent = "";

    document.getElementById("excuse-quality").textContent = "--";

    document.getElementById("productivity-loss").textContent = "--";

    document.getElementById("scientific-validity").textContent = "--";

    document.getElementById("excuse-footnote").textContent = "";

}


function generateExcuse() {

    const loading =
        document.getElementById("procrastination-loading");

    const result =
        document.getElementById("excuse-result");

    const meter =
        document.getElementById("procrastination-meter-fill");

    const level =
        document.getElementById("procrastination-level");

    const prompt =
        document.getElementById("procrastination-prompt");

    const loadingText =
        document.getElementById("procrastination-loading-text");

    const couch =
        document.getElementById("couch-icon");

    const excuseButton =
        document.getElementById("excuse-button");

    const worseButton =
        document.getElementById("worse-button");


    excuseButton.disabled = true;

    result.classList.add("hidden");

    loading.classList.remove("hidden");

    meter.style.width = "0%";

    level.textContent = "ANALYSING";

    couch.textContent = "🧠";


    const loadingMessages = [

        "Locating your remaining motivation...",

        "Scanning for possible productivity...",

        "Checking whether the assignment can wait...",

        "Measuring unnecessary preparation...",

        "Consulting the procrastination department...",

        "Calculating your resistance to responsibility...",

        "Cross-referencing absolutely nothing...",

        "Determining a legally questionable excuse..."

    ];


    let index = 0;


    loadingText.textContent =
        loadingMessages[index];


    const messageInterval =
        setInterval(function () {

            index++;


            if (index < loadingMessages.length) {

                loadingText.textContent =
                    loadingMessages[index];

            }

        }, 350);


    const procrastinationLevel =
        Math.floor(Math.random() * 61) + 35;


    const randomIndex =
        Math.floor(
            Math.random() * excuses.length
        );


    const selectedExcuse =
        excuses[randomIndex];


    setTimeout(function () {

        clearInterval(messageInterval);

        loading.classList.add("hidden");


        meter.style.width =
            procrastinationLevel + "%";


        if (procrastinationLevel >= 80) {

            level.textContent =
                "SEVERE";

            prompt.textContent =
                "Productivity has attempted contact. You have declined the call.";

            couch.textContent =
                "🛋️";

        }

        else if (procrastinationLevel >= 60) {

            level.textContent =
                "CONCERNING";

            prompt.textContent =
                "You could probably work. Unfortunately, you have chosen not to.";

            couch.textContent =
                "😌";

        }

        else {

            level.textContent =
                "MILD";

            prompt.textContent =
                "There is still time to make a questionable decision.";

            couch.textContent =
                "🙂";

        }


        document.getElementById("excuse-text").textContent =
            selectedExcuse;


        const excuseQuality =
            Math.floor(Math.random() * 21) + 75;


        const productivityLoss =
            Math.floor(Math.random() * 31) + 60;


        const scientificValidity =
            Math.floor(Math.random() * 96);


        document.getElementById("excuse-quality").textContent =
            excuseQuality + "%";


        document.getElementById("productivity-loss").textContent =
            productivityLoss + "%";


        document.getElementById("scientific-validity").textContent =
            scientificValidity + "%";


        document.getElementById("excuse-footnote").textContent =

            scientificValidity < 30

                ? "*This excuse has failed basic scientific review."

                : scientificValidity < 70

                    ? "*The evidence is questionable but emotionally convincing."

                    : "*Peer review has been intentionally avoided.";


        result.classList.remove("hidden");

        worseButton.classList.remove("hidden");

        excuseButton.disabled = false;

    }, 2800);

}


function makeItWorse() {

    const excuseText =
        document.getElementById("excuse-text");

    const level =
        document.getElementById("procrastination-level");

    const meter =
        document.getElementById("procrastination-meter-fill");

    const prompt =
        document.getElementById("procrastination-prompt");


    const randomIndex =
        Math.floor(
            Math.random() * worseExcuses.length
        );


    excuseText.style.opacity = "0";


    setTimeout(function () {

        excuseText.textContent =
            worseExcuses[randomIndex];

        excuseText.style.opacity = "1";

    }, 200);


    const currentLevel =
        Math.floor(Math.random() * 16) + 85;


    meter.style.width =
        currentLevel + "%";


    level.textContent =
        "IRREVERSIBLE";


    prompt.textContent =
        "The situation has escalated unnecessarily.";


    document.getElementById("excuse-quality").textContent =
        (Math.floor(Math.random() * 6) + 95) + "%";


    document.getElementById("productivity-loss").textContent =
        (Math.floor(Math.random() * 11) + 90) + "%";


    document.getElementById("scientific-validity").textContent =
        (Math.floor(Math.random() * 51) + 10) + "%";


    document.getElementById("excuse-footnote").textContent =
        "*Further analysis has been suspended due to excessive procrastination.";

}


/* =========================
   SURVIVAL CALCULATOR
========================= */

function calculateSurvival() {

    const questions = [

        "assignments",

        "exam",

        "syllabus",

        "coffee",

        "attendance",

        "tomorrow",

        "sleep",

        "scrolling",

        "notes",

        "understanding"

    ];


    let score = 0;

    let answered = 0;


    questions.forEach(function (question) {

        const selected =
            document.querySelector(
                'input[name="' + question + '"]:checked'
            );


        if (selected) {

            score += Number(selected.value);

            answered++;

        }

    });


    /* Make sure all questions are answered */

    if (answered < questions.length) {

        alert(
            "SYSTEM ERROR: You forgot to answer " +
            (questions.length - answered) +
            " question(s). The calculator refuses to judge you yet."
        );

        return;

    }


    /* Maximum score = 30 */

    const survivalRate =
        Math.round((score / 30) * 100);


    /* =========================
       FAKE SYSTEM SCAN
    ========================= */

    const scan =
        document.getElementById("survival-scan");

    const progress =
        document.getElementById("scan-progress");

    const percentage =
        document.getElementById("scan-percentage");

    const message =
        document.getElementById("scan-message");


    scan.classList.remove("hidden");


    const scanMessages = [

        "Counting your questionable decisions...",

        "Analysing academic stability...",

        "Checking deadline survival instincts...",

        "Cross-referencing your answers with absolutely nothing...",

        "Consulting highly unqualified experts...",

        "Calculating unnecessary statistics...",

        "Measuring your ability to survive Monday...",

        "Judging your time management...",

        "Reconsidering the purpose of this website...",

        "Finalising completely legitimate results..."

    ];


    let progressValue = 0;

    let messageIndex = 0;


    const scanInterval =
        setInterval(function () {

            progressValue +=
                Math.floor(Math.random() * 8) + 4;


            if (progressValue > 100) {

                progressValue = 100;

            }


            progress.style.width =
                progressValue + "%";


            percentage.textContent =
                progressValue + "%";


            if (
                progressValue >= messageIndex * 10 &&
                messageIndex < scanMessages.length
            ) {

                message.textContent =
                    scanMessages[messageIndex];

                messageIndex++;

            }


            if (progressValue >= 100) {

                clearInterval(scanInterval);


                setTimeout(function () {

                    showResult(survivalRate);

                }, 500);

            }


        }, 180);

}


/* =========================
   RESULT
========================= */

function showResult(score) {

    hideAllPages();


    const result =
        document.getElementById("result");


    result.style.display = "block";


    document.getElementById("survival-score").textContent =
        score + "%";


    /* =========================
       STATUS
    ========================= */

    let status;

    let message;

    let roast;

    let strategy;

    let emoji;

    let caption;


    if (score >= 80) {

        status =
            "SURVIVAL CONFIRMED";

        message =
            "Somehow, you appear to have your life together.";

        roast =
            "Suspiciously competent. We are investigating.";

        strategy =
            "Continue whatever you're doing. And don't tell anyone your secret.";

        emoji =
            "🫡";

        caption =
            "The system respects you.";

    }


    else if (score >= 60) {

        status =
            "BARELY STABLE";

        message =
            "You are surviving. The definition of surviving is flexible.";

        roast =
            "You look organised from a distance.";

        strategy =
            "Keep the deadlines visible and stop trusting Future You.";

        emoji =
            "😌";

        caption =
            "Acceptable levels of academic chaos.";

    }


    else if (score >= 40) {

        status =
            "CONCERNING";

        message =
            "Your survival rate has raised several unnecessary questions.";

        roast =
            "You and your deadlines appear to be in a complicated relationship.";

        strategy =
            "Pick one pending task. Do it. Then pretend you planned this.";

        emoji =
            "😐";

        caption =
            "The system has concerns.";

    }


    else if (score >= 20) {

        status =
            "CRITICAL";

        message =
            "Your academic stability is currently held together by optimism.";

        roast =
            "At this point, even your calendar has given up.";

        strategy =
            "Stop opening new tabs. Finish one thing.";

        emoji =
            "🫠";

        caption =
            "We recommend immediate productivity.";

    }


    else {

        status =
            "SYSTEM FAILURE";

        message =
            "The calculator would like to speak to your academic advisor.";

        roast =
            "Honestly, we don't know what happened here.";

        strategy =
            "Start with the smallest task. Then keep going.";

        emoji =
            "💀";

        caption =
            "The system needs a moment.";

    }


    document.getElementById("result-status").textContent =
        status;


    document.getElementById("score-message").textContent =
        message;


    document.getElementById("roast").textContent =
        roast;


    document.getElementById("strategy").textContent =
        strategy;


    document.getElementById("reaction-emoji").textContent =
        emoji;


    document.getElementById("reaction-caption").textContent =
        caption;


    /* =========================
       USELESS DIAGNOSTICS
    ========================= */

    const chaos =
        100 - score;


    const deadlineStability =
        Math.max(
            5,
            score + Math.floor(Math.random() * 20) - 10
        );


    const confidence =
        Math.floor(Math.random() * 21) + 70;


    document.getElementById("chaos-value").textContent =
        chaos + "%";


    document.getElementById("deadline-value").textContent =
        deadlineStability + "%";


    document.getElementById("confidence-value").textContent =
        confidence + "%";


    window.scrollTo(0, 0);

}


/* =========================
   RESTART QUIZ
========================= */

function restartQuiz() {

    const radios =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    radios.forEach(function (radio) {

        radio.checked = false;

    });


    showQuiz();

}