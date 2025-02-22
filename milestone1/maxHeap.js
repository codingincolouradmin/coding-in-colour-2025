//Min-Heap Class
class Heap{
  constructor(){
    this.heap = [];
  }
  parentIndex(index){
    return Math.floor((index-1/2));
  
  }

  leftChildIndex(index){
    return 2 * index +1 
  }

  rightChildIndex(index){
    return 2* index + 2
  }

  insert(value){
    this.heap.push(value);
    this.heapifyUp();

  }

  heapifyUp(){
    let index = this.heap.length-1;
    while(index>0){
      let parentIdx = this.parentIndex(index);
      if(this.heap[parentIdx] < this.heap[index]){
        [this.heap[parentIdx],this.heap[index]] = [this.heap[index],this.heap[parentIdx]];
        index = parentIdx;
      }
      else{
        break;
      }
    }
  }
  

  remove(){
    if(this.heap.length === 1){
      return this.heap.pop();
    }
    const root = this.heap[0];
    this.heap[0]= this.heap.pop();
    this.heapifyDown(0);
    return root;
  }
  heapifyDown(index){
    let leftIdx = this.leftChildIndex(index);
    let rightIdx = this.rightChildIndex(index);
    let largestIdx = index;

    if(leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largestIdx]){
      largestIdx = leftIdx;
    }
    if(rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largestIdx]){
      largestIdx = rightIdx;
    }

    if(largestIdx !== index){
      [this.heap[index],this.heap[largestIdx]] = [this.heap[largestIdx],this.heap[index]];
      this.heapifyDown(largestIdx);
    }

  }




}





//Inserting into Min-Heap
const minHeap = new Heap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(2);
console.log(minHeap.heap);



//Deleting from Min-Heap
console.log(minHeap.remove());
console.log(minHeap.heap);


