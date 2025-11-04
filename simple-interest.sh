#!/bin/bash

# Script to calculate simple interest
# Formula: SI = (P × R × T) / 100

echo "Enter Principal Amount:"
read p

echo "Enter Rate of Interest:"
read r

echo "Enter Time (years):"
read t

si=$((p * r * t / 100))

echo "Simple Interest = Rs.$si"
