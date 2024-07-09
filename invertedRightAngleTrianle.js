function invertedRightAngleTrianle(height){
    let block ='#'.repeat(height + 1);
    
    for(let i = height; i >= 1; i--){
        block = block.slice(1);
        console.log(block);
    }
    
}
invertedRightAngleTrianle(8);