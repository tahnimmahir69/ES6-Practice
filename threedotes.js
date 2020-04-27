const ages = [12, 14, 16, 20];
const ages2 = [14, 18, 15];
const ages3 = [24, 28, 25, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

//Or
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges)
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPaisa = [650, 450, 250];
// const maximum = math.max(business, minister, shocib);
const maximum = Math.max(...takaPaisa);
console.log(maximum);