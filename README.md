# Node.js Server Crash on Non-GET Requests

This repository demonstrates a common error in Node.js HTTP servers: crashing on requests with methods other than GET.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Bug Description

The original code lacks a check for the request method (`req.method`).  If a request with a method other than GET (e.g., POST, PUT, DELETE) is received, the server attempts to process it improperly, leading to a crash.

## Solution

The solution adds a simple check to ensure only GET requests are processed.  If the method is not GET, a 405 (Method Not Allowed) status code is returned, and further processing is prevented using `return`. This prevents unexpected crashes and enhances the server's robustness.