function invertedRightAngleTrianle(height){
    block = new Array(height).fill('#');
    block = block.fill('#', 0, height);
    
    for(let i = height; i >=0; i--){
        console.log(block.join(' '));
        block.pop();

    }
    
}
invertedRightAngleTrianle(8);