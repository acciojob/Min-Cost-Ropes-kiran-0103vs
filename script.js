function mincost(arr)
{ 
//write your code here
// return the min cost
	let heap = [...arr].sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Keep connecting ropes until only one rope remains
    while (heap.length > 1) {
        // Extract the two smallest ropes
        let first = heap.shift();
        let second = heap.shift();
        
        // The cost of connecting them
        let cost = first + second;
        totalCost += cost;
        
        // Add the new rope back into the heap
        // Find the correct position to insert the new rope to maintain the sorted order
        let i = 0;
        while (i < heap.length && heap[i] < cost) {
            i++;
        }
        heap.splice(i, 0, cost); // Insert cost at the right position
    }
    
    return totalCost;
  
}

module.exports=mincost;
