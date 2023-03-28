function logNodeInfo(node, index) {
    console.log(`Element Index: ${index}, Tag Name: ${node.tagName}, Text Content: ${node.textContent.trim()}`);

    // Loop through each child element and call this function recursively
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        const childIndex = `${index}.${i}`;
        logNodeInfo(child, childIndex);
    }
}

logNodeInfo(document.body, '0');