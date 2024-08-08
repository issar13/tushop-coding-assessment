# Tushop Assessment

This repository is my submission for the Tushop assessment.

## Description

The repository contains two modules:

1. `problem1` - A module that maximizes earnings for an employee of a specified company.
2. `problem2` - This module finds the lowest possible difference between two price points in a list of products to be distributed.

## Technology Stack

This program is developed using the following technologies:

- Typescript (v5.5.4)
- NodeJs (v18.20.4)
- Nodemon (v3.0.1)

## Installation

To install this tool, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `npm install` to install the project dependencies.

## Problem One

This module contains an algorithm that maximizes earnings for an employee of a specified company and displays the tasks and remaining earnings for the rest of the employees.

### Problem One Video Demonstration

  [![Problem 1 Demonstration](https://cdn.loom.com/sessions/thumbnails/cd71a19869264847b0078c3f567def94-48f9dd28f49d1125-full-play.gif)](https://www.loom.com/share/cd71a19869264847b0078c3f567def94)


### Problem One Usage

To use this tool, follow the steps below:

1. Run `npm run start` to start the server.
2. The program will run in the terminal and request user input.
3. Input 1 to start execution of problem 1.
4. Follow by entering the number of jobs.
5. Finish with the keying in hours and profit for each job.
6. View the results of left jobs and earnings.

### Problem One Testing

To test this tool, follow the steps below:

1. Run `npm run test1` for tests.
2. All tests should pass.

## Problem Two

This module contains an algorithm that finds the lowest possible difference between two price points in a list of products.

### Problem Two Video Demonstration

  [![Problem 2 Demonstration](https://cdn.loom.com/sessions/thumbnails/6477399212d94da1b7b191dfc0e54288-072435dd7860d511-full-play.gif)](https://www.loom.com/share/6477399212d94da1b7b191dfc0e54288)

### Problem Two Usage

To use this tool, follow the steps below:

1. Run `npm run start` to start the server.
2. Input 2 to start execution of problem 2.
3. Follow by entering number of employees wish to test.
4. Program will console the distribution of goods and difference.
5. An output file will be generated in the `src/problem2/files` directory. The output file will be named `goodies.output.txt`.

### Problem Two Testing

To test this tool, follow the steps below:

1. Run `npm run test2` to run the tests.
2. The output file will be generated in the `src/problem2/files` directory. The output file will be named `goodies.output.txt`.
