// Problem Statement
// Dynamic Array Implementation

// You are required to implement a dynamic array (vector) in TypeScript. The dynamic array should support the following operations:

// Initialization:

// Initialize a dynamic array with a specified initial capacity and element size.
// Add Element:

// Add an element to the dynamic array.
// If the array is full, double its capacity and then add the element.
// Remove Element:

// Remove an element from the dynamic array by index.
// Shift subsequent elements to fill the gap.
// Return the removed element.
// Get Element:

// Retrieve an element from the dynamic array by index.
// Print Array:

// Print all elements in the dynamic array.
// Function Signatures
// Example
// Constraints
// The dynamic array should handle integer elements (32-bit).
// The initial capacity and element size will be provided during initialization.
// The dynamic array should automatically resize when it becomes full.
// Notes
// You should not use the built-in Array class for this implementation.
// Focus on using buffers to manage the memory for the dynamic array.
// Ensure that the functions do not mutate the original array but return new instances where necessary.
// Tips
// Use Buffer.alloc to allocate memory for the buffer.
// Use Buffer methods like writeUInt32LE and readUInt32LE to handle integer elements.
// Ensure that the buffer is resized correctly when the array becomes full.

import { createVector } from "./vector";

const arr = createVector(1, 4);

arr.resize();

arr.insert(9);

console.log(arr);
