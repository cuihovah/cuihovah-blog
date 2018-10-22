1、根据如下伪代码回答问题

```
SORT(A, p, r)
    if  p < r
        then 
        q ← ⎣(p+r)/2⎦
        SORT (A, p, q)
        SORT (A, q+1, r)
        FUNCTION (A, p, q, r)
  
FUNCTION (A, p, q, r)
    n1 ← q-p+1;
    n2 2 ← r-q;
    create arrays L[1..n1+1] and R[1..n2+1]
    for i ← 1 to n1
        do L[i] ← A[p + i-1]
    for j ← 1 to n2
        do R[j] ← A[q + j]
    L[n1+1] ← ∞
    R[n2+1] ← ∞
    i ← 1
    j ← 1
    for k ← p to r
        do if L[i] < R[j]
            then A[k] ← L[i]
                i ← i + 1
            else A[k] ← R[j]
                j ← j + 1
```
1）该算法的时间复杂度是？
2）该算法的空间复杂度是？
3）用您最熟悉的语言将伪代码实现

2、给定学员信息数据结构如下，计算出年龄最大第N个人是谁

```
[{
	"name": "string",
	"id": "41041119521023651X",
	"birthday": "2018/10/04"
}]
```

3、给定一个整数数组，其中两个数相加等于给定的目标的组合有多少

```
例如：arrs = [2, 7, 4, 5, 11, 15] target = 9
因为: 2 + 7 = 9， 4 + 5 = 9 所以有2种组合
return 2
```

