Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

d1, d2 = [], []
k = 0
for i in Matrix:
    d1.append(i[k])
    k = k+1

for i in Matrix:
    k = k-1
    d2.append(i[k])
total = sum(d1)-sum(d2)
print(total)
