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

 function levelOrder(root: TreeNode | null): number[][] {
    const result = [];
    const nodeStack = [];
    let curNode = root;
    nodeStack.push({
        node: root,
        layer: 0
    });
    let curLayer = 0;
    let curLayerData = []
    while(nodeStack.length !== 0) {
        const curNodeData = nodeStack.shift();
        const { node, layer } = curNodeData;
        if(layer !== curLayer) {
            result.push(curLayerData);
            curLayerData = [];
            curLayer = layer;
        };
        if(!node) continue;
        curLayerData.push(node.val);
        nodeStack.push({
            node: node.left,
            layer: layer + 1
        });
        nodeStack.push({
            node: node.right,
            layer: layer + 1
        });
    }
    if(curLayerData.length > 0) result.push(curLayerData);
    return result;
};