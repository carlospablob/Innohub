function verify() {
    let A = new Set([1, 2]);
    let B = new Set([1, 2, 3]);
    console.log(isSubsetOf(A, B));
    console.log(isSubsetOf(B, A));
    console.log(isSupersetOf(A, B));
    console.log(isSupersetOf(B, A));
}

function isSubsetOf(A, B) {
    const valuesA = A.values();
    const valuesB = B.values();
    const arrayA = Array.from(valuesA);
    const arrayB = Array.from(valuesB);
    return arrayA.every(e => arrayB.includes(e));
}

function isSupersetOf(A, B) {
    const valuesA = A.values();
    const valuesB = B.values();
    const arrayA = Array.from(valuesA);
    const arrayB = Array.from(valuesB);
    return arrayB.every(e => arrayA.includes(e));
}

verify();
