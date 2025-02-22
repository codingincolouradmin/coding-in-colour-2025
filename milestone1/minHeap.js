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
      if(this.heap[parentIdx] > this.heap[index]){
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
    let smallestIdx = index;

    if(leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[smallestIdx]){
      smallestIdx = leftIdx;
    }
    if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[smallestIdx]){
      smallestIdx = rightIdx;
    }

    if(smallestIdx !== index){
      [this.heap[index],this.heap[smallestIdx]] = [this.heap[smallestIdx],this.heap[index]];
      this.heapifyDown(smallestIdx);
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


