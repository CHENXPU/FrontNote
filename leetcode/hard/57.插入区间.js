/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (33.61%)
 * Likes:    44
 * Dislikes: 0
 * Total Accepted:    5.4K
 * Total Submissions: 15.9K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1:
 *
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 *
 *
 * 示例 2:
 *
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 *
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  return intervals.reduce((p, e, i, a) => {
    if (e[1] < p[p.length - 1][0]) {
      p.splice(p.length - 1, 0, e);
    } else if (e[0] > p[p.length - 1][1]) {
      p.push(e);
    } else {
      p[p.length - 1][0] = Math.min(e[0], p[p.length - 1][0]);
      p[p.length - 1][1] = Math.max(e[1], p[p.length - 1][1]);
    }
    return p;
  }, [newInterval]);
};
