var set1 = [12, 13, 6, 10];
var set2 = [13, 10, 16, 15];
var sumset1 = 0;
var sumset2 = 0;
var sumBothSetsExcludingRepeated = 0;
var sumExecludingRepeated1 = 0;
var sumExecludingRepeated2 = 0;
var set1Copy = [...set1];
var set2Copy = [...set2];
var RepeatedSum = 0;
var RepeatedElements = [];
var SumOfRepeatedValues = document.getElementsByClassName("Result");
function compare(set1, set2) {
  for (i = 0; i < set1.length; i++) {
    for (N = 0; N < set2.length; N++) {
      if (set1[i] == set2[N]) {
        RepeatedNumber(i, N);
        RepeatedElements.push(set1[i]);
      }
    }
  }
}
function RepeatedNumber(i, N) {
  RepeatedSum = set1Copy[i] + set2Copy[N] + RepeatedSum;
}
function Summation(var1, var2) {
  for (i = 0; i < var1; i++) {
    sumset1 = set1Copy[i] + sumset1;
  }
  for (i = 0; i < var2; i++) {
    sumset2 = set2Copy[i] + sumset2;
  }
  console.log(sumset1);
  console.log(sumset2);
}
function FinalValue() {
  compare(set1, set2);
  Summation(set1.length, set2.length);
  console.log("OverLapping Elements", RepeatedSum);
  sumExecludingRepeated1 = sumset1 - RepeatedSum * 0.5;
  sumExecludingRepeated2 = sumset2 - RepeatedSum * 0.5;
  console.log("Set1 Summation", sumExecludingRepeated1);
  console.log("Set2 Summation", sumExecludingRepeated2);
  sumBothSetsExcludingRepeated =
    sumExecludingRepeated2 + sumExecludingRepeated1;
  console.log(
    "Sum Of Both Sets After Excluding Elements",
    sumBothSetsExcludingRepeated
  );
}
function output() {
  SumOfRepeatedValues[0].textContent = sumExecludingRepeated1;
  SumOfRepeatedValues[1].textContent = sumExecludingRepeated2;
  SumOfRepeatedValues[2].textContent = sumBothSetsExcludingRepeated;
  SumOfRepeatedValues[3].textContent = RepeatedElements;
}
FinalValue();
output();
