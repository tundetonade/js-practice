function invertedRightAngleTrianle(height){
    let block ='#'.repeat(height);
    
    for(let i = height; i >= 1; i--){
        console.log(block);
        block = block.slice(1);
    }
    
}
invertedRightAngleTrianle(8);