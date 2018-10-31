## Based from my current observations
## x++
> The following step-by-step process takes place:
>
> X gets returned
>
> Comparisons are made
>
> X gets incremented by one
### e.g
```
let x = 0;
console.log(x++===0);
```
> x will be returned
>
> x will be compared to 0
>
> x will then be incremented
>
> Output: True

## ++x
> The following step-by-step process takes place:
>
> X gets incremented by one
>
> Comparisons are made
>
> X gets returned
### e.g
```
let x = 0;
console.log(++x===0);
```
> x will be incremented
>
> x will be compared to 0
>
> x will then be returned
>
> Output: False
