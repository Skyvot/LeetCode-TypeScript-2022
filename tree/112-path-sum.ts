/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    function checkTarget(root: TreeNode, curSum: number) {
        if (!root) return false;
        const { val, left, right } = root;
        if (!left && !right) return curSum + val === targetSum;
        return checkTarget(left, val + curSum) || checkTarget(right, val + curSum)
    }
    
    if(!root) return false; // evil trap
    return checkTarget(root, 0)
};