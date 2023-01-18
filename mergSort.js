function MergS(array) {
    if (array.length === 0) return "Please provide a non empty array!"
    if (array.length === 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);
    return merg(MergS(left), MergS(right));
}
function merg(left, right) {
    const merged = [];
    let Iright = 0;
    let Ileft = 0;
    //merging left and right values 
    while (Ileft < left.length && Iright < right.length) {
        if (left[Ileft] < right[Iright]) {
            merged.push(left[Ileft]);
            Ileft++;
        }
        else {
            merged.push(right[Iright]);
            Iright++;
        }
    }
    //merge remaining values 
    while (Ileft < left.length) {
        merged.push(left[Ileft]);
        Ileft++;
    }
    while (Iright < right.length) {
        merged.push(right[Iright]);
        Iright++;
    }
    return merged;
}


