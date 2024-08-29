import { Buffer } from "node:buffer";

interface Vector {
  buffer: Buffer; // main contigous piece of memory
  length: number;
  capacity: number;
  elementSize: number;
  //functions
  insert: (element: number) => void;
  getLength: () => number;
  get: (index: number) => number;
  resize: () => void;
  print: () => void;
  clear: () => void;
  setElement: (index: number, element: number) => void;
  free: () => void;
}

/**
 * Creates an instance of the Super Vector
 * @param initialCap
 * @param elementSize
 * @returns
 */
export const createVector = (
  initialCap: number,
  elementSize: number
): Vector => {
  //create a buffer of inital size

  const buffer = Buffer.alloc(initialCap * elementSize);

  //create a vector that contains all of the data points

  const vector = {
    buffer,
    length: 0,
    capacity: initialCap,
    elementSize,

    /**
     * This doubles the size of the vector when it runs out of space.
     */
    resize: () => {
      //calculate the new capacity of the vector
      const newCap = vector.capacity * 2;

      //allocate a new contigous piece of memory with the new capacity
      const newBuffer = Buffer.alloc(newCap * elementSize);

      //copy any existing data in the vector into the new one
      vector.buffer.copy(newBuffer, 0, 0, vector.length * vector.elementSize);

      //update the hash table reference
      vector.buffer = newBuffer;
      vector.capacity = newCap;
    },

    /**
     *
     * This will add a new element to the vector. If the vector has reached its current capacity, it will first resize the vector to accomodate for the new element.
     * @param element
     */
    insert: (element: number) => {
      if (vector.length >= vector.capacity) {
        //we have reached the limit and we must resize
        vector.resize();
      }
      //length * offset, write the number
      vector.buffer.writeUInt32LE(element, vector.length * elementSize);

      //iterate legth after
      vector.length++;
    },

    getLength: () => vector.length,

    get: (index: number) => {
      if (index < 0 || index >= vector.length) {
        throw new Error("Index out of bounds");
      }

      return vector.buffer.readUInt32LE(index * elementSize);
    },

    print: () => {
      for (let i = 0; i < vector.length; i++) {
        console.log(vector.get(i));
      }
    },
    clear: () => {
      //we are chosing to leave the memory allocated
      vector.capacity = 0;
    },
    setElement: (index: number, element: number) => {},
    free: () => {
      vector.buffer = Buffer.alloc(0);
      vector.capacity = 0;
      vector.length = 0;
    },
  };

  return vector;
};
