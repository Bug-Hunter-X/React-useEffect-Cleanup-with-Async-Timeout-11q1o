# React useEffect Cleanup with Async Timeout

This repository demonstrates a common error in React's `useEffect` hook, specifically related to the cleanup function and asynchronous operations (timeouts). The `bug.js` file showcases the incorrect implementation, leading to potential issues when the component unmounts. The `bugSolution.js` file provides the corrected version.

## Problem

The issue lies in how the timeout is handled within the `useEffect` hook.  The cleanup function, responsible for canceling side effects, is not guaranteed to execute before the component unmounts, especially with asynchronous operations.  If the component unmounts before the timeout clears, the timeout might still execute, leading to issues such as memory leaks or unexpected behavior.

## Solution

The solution involves ensuring that the timeout is cleared reliably within the cleanup function.  This is accomplished by using `clearTimeout` to explicitly cancel the timeout before the component unmounts.