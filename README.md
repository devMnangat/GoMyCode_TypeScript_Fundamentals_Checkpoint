# Vehicle and Car TypeScript Example

This project demonstrates the implementation of an interface in TypeScript and a class that implements that interface. Specifically, it defines a `Vehicle` interface and a `Car` class that implements the `Vehicle` interface.

## Project Structure

- `Vehicle.ts`: Defines the `Vehicle` interface with properties `make`, `model`, `year`, and a method `start()`.
- `Car.ts`: Implements the `Vehicle` interface with the `Car` class. The `Car` class has a constructor to initialize the properties and a `start()` method to log a message to the console.

## How to Run

1. Ensure you have Node.js and TypeScript installed.
2. Clone this repository or copy the files into a new directory.
3. Open a terminal and navigate to the directory containing the files.
4. Compile the TypeScript code to JavaScript by running:
    ```bash
    tsc
    ```
5. Run the generated JavaScript file using Node.js:
    ```bash
    node Car.js
    ```

