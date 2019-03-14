/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.50%)
 * Total Accepted:    88.9K
 * Total Submissions: 311.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let uniStrLengthArr = [];
  for (let i = 0; i < s.length; i++) {
    uniStrLengthArr[i] = getUniqueString(s.substring(i));
  }
  // console.log(uniStrLengthArr);
  return Math.max(...uniStrLengthArr, 0);
};

function getUniqueString(s) {
  let uniqueString = new Map();
  for (let i = 0; i < s.length; i++) {
    if(!uniqueString.get(s[i]))
      uniqueString.set(s[i], i);
    else
      break;
  }
  return uniqueString.size;
}

// console.log(lengthOfLongestSubstring('abcabcbb'));

// console.log(lengthOfLongestSubstring(''));
