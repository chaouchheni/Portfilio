function submitQuiz() {
    const answers = {
        q1: "a",
        q2: "b",
        q3: "b",
        q5: "b",
        q6: "a",
        q7: "a",
        q8: "a",
        q9: "a",
        q10: "b",
        q11: "a"
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    // Iterate through each question and check answers
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Display results
    const result = document.getElementById("quiz-result");
    result.innerHTML = `<h3>You scored ${score} out of ${totalQuestions}!</h3>`;

    if (score === totalQuestions) {
        result.innerHTML += "<p>Excellent work! You got everything right!</p>";
    } else {
        result.innerHTML += "<p>Keep practicing to improve your score.</p>";
    }
}


