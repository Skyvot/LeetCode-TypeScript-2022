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


 function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    function travel(curNode) {
        if(!curNode) return;
        travel(curNode.left);
        result.push(curNode.val);
        travel(curNode.right);
    }
    travel(root);
    return result;
};