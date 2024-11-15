const Example = () => {

const nums = [1,2,3]
const sum = (arry) => arry.reduce((accu, curr) => accu + curr, 0)

const numObj = {
  nums: [1,2,3],
  sum() {
    const nums = this.nums;
    let sumValue = 0;
    for (let i = 0; i < nums.length; i++) {
      sumValue += nums[i];
    }
    return sumValue;
  }
}

  return (
    <>
      <div>Object: {numObj.sum()}</div>
      <div>Func: {sum(nums)}</div>
    </>
  );
};

export default Example;
