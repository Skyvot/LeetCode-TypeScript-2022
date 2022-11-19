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

 function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;
    let sum: number = 0;
    const getSum = (curNode: TreeNode | null, curStr: string): null => {
        const { left, right, val } = curNode
        
        // if leaf node, add to sum
        if (!left && !right) {
            sum += Number(curStr + val);
            return;
        }
        
        if (left) getSum(left, curStr + val);
        if (right) getSum(right, curStr + val);
    }
    
    getSum(root, '');
    return sum;
};