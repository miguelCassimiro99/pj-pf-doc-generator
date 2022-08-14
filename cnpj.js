function randomicGenerator(num) {
  const r = Math.round(Math.random() * num)
  return r;
}

function moduleCalc(dividend, divisor) {
  return Math.round(dividend - (Math.floor(dividend / divisor) * divisor));
}

function generateCNPJ() {
  const num = 9;
  let nums = [];

  for(let i = 0; i < 12; i ++) {
    if(i <= 8) nums.push(randomicGenerator(num))
    if(i >= 9 && i < 11) nums.push(0);
    if(i === 11) nums.push(1);
  }
  console.log(nums);

  let d1 = nums[11]*2 + nums[10]*3 + nums[9]*4 + nums[8]*5 + nums[7]*6 +
    nums[6]*7 + nums[5]*8 + nums[4]*9 + nums[3]*2 + nums[2]*3 + nums[1]*4 + 
    nums[0]*5;

  if (d1 >= 10) d1 = 0;

  let d2 = d1*2 + nums[11]*3 + nums[10]*4 + nums[9]*5 + nums[8]*6 +
    nums[7]*7 + nums[6]*8 + nums[5]*9 + nums[4]*2 + nums[3]*3 + nums[2]*4 +
    nums[1]*5 + nums[0]*6;

  d2 = 11 - (moduleCalc(d2, 11));
  if(d2 >= 10) d2 = 0;

  const cnpj = `${nums[0]}${nums[1]}.${nums[2]}${nums[3]}${nums[4]}.${nums[5]}${nums[6]}${nums[7]}/${nums[8]}${nums[9]}${nums[10]}${nums[11]}-${d1}${d2}`;

  console.log('CNPJ generated: ', cnpj);

}