// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return (blocks - 42)
    } else {
        return (42 - blocks)
    }
distanceFromHqInBlocks()
}
function distanceFromHqInFeet(feet) {
    if (feet >= 42) {
        return (feet - 42) * 264
    } else {
        return (42 - feet) * 264
    }
    distanceFromHqInFeet()
}
function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end) * 264
    } else {
        return (end - start) * 264
    }
    distanceTravelledInFeet()
}
function calculatesFarePrice(start, end){
    let d = distanceTravelledInFeet(start, end)
    if (d <= 400){
        return 0;
    } else if (d <= 2000){
        return  2.56;
    } else if (d <= 2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
    calculatesFarePrice()

}
