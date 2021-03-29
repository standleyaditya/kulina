package main

import (
    "fmt"
	"strconv"
	"math"
)


func main() {
	start := strconv.Itoa(1345679)
	for i := 0; i < len(start); i++ {
		selected := string(start[i])
		printed, err := strconv.Atoi(selected)
		_ = err
		multi := math.Pow(10, float64(len(start)-1)-float64(i))
		fmt.Println(printed*int(multi))
	}
}