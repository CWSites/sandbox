import { useEffect, useState } from "react";

const data = `100
132
1000
7
700
154
709
181
735
441
424
364
649
925
87
692
177
397
375
342
596
768
107
967
825
393
502
999
372
155
826
383
217
173
946
212
124
560
484
924
232
264
223
980
891
179
103
636
564
244
1
117
199
453
56
814
553
27
460
433
43
34
787
879
828
9
146
328
296
792
948
498
110
357
135
584
561
903
938
982
954
638
425
922
894
827
675
930
994
757
191
704
626
469
764
303
239
653
869
932
557`;

export const Page = () => {
  const [tidyNumbers, setTidyNumbers] = useState<Array<number | string>>([]);
  const [testCases, setTestCases] = useState<number>(0);

  const isTidyNumber = (number: string) => {
    const numberArray = number.split("");
    let isTidy = false;

    // determine if the number is tidy (123) or not (321)
    for (let j = 0; j < numberArray.length; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        isTidy = false;
        break;
      } else {
        isTidy = true;
      }
    }

    return isTidy;
  };

  const parseNumbers = () => {
    // Split the data into an array of strings
    let numbers = data.split("\n");
    let parsedNumbers: string[] = [];

    // Remove the first element, which is the number of test cases
    setTestCases(Number(numbers.splice(0, 1)[0]));

    for (let i = 0; i < testCases; i++) {
      // split current number into an array of strings
      const currentNumber = numbers[i];

      if (isTidyNumber(currentNumber)) {
        // if so, add it to the list of tidy numbers
        parsedNumbers.push(currentNumber);
      } else {
        // if not, count backwards until we find a tidy number, and add that to the list
        const currentNum = Number(currentNumber);
        let prevNum = currentNum;
        let isPrevTidy = false;

        while (!isPrevTidy) {
          prevNum = prevNum - 1;
          // take currentNum, and subtract 1 until we find a tidy number
          isPrevTidy = isTidyNumber(prevNum.toString());
        }

        if (isPrevTidy) {
          parsedNumbers.push(prevNum.toString());
        }
      }
    }

    console.log(parsedNumbers[0]);

    setTidyNumbers(parsedNumbers);
  };

  useEffect(() => {
    parseNumbers();
  }, []);

  return (
    <main>
      <h1>Codametrix</h1>
      <ul>
        {/* limited to number of test cases */}
        {tidyNumbers.map((number, index) => {
          return (
            <li key={index}>
              Case #{index + 1}: {number}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
