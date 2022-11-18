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

 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let isSame: boolean = true;
    function checkSubTree(node1: TreeNode, node2: TreeNode) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        if(node1.val !== node2.val) return false;
        return checkSubTree(node1.left, node2.left) && checkSubTree(node1.right, node2.right);
    };
    return checkSubTree(p, q);
};