function fibonacciSequence(number) {
    const sequence = [];

    if (number >= 1) sequence.push(0);
    if (number >= 2) sequence.push(1);

    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}
