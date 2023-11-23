const nums = [1, 2, 3];

function permute(array) {
  const results = [];

  const backtrack = (results, tempList, arr) => {
    if (tempList.length === array.length) {
      results.push([...tempList]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      tempList.push(arr[i]);
      const slice = [...arr.slice(0, i), ...arr.slice(i + 1)];
      backtrack(results, tempList, slice);
      tempList.pop();
    }
  };

  backtrack(results, [], array);
  return results;
}

permute(nums);
